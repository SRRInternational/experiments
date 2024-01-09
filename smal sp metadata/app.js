const fs = require('fs');
const express = require("express");
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const saml = require('passport-saml');
const zlib = require("zlib");

dotenv.config();

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});

const samlStrategy = new saml.Strategy({
    // Identity Provider's Single Sign on URL (HTTP-Redirect Binding)
    entryPoint: process.env.ENTRYPOINT,
    // Service Provider's Entity ID
    issuer: 'http://localhost:8000/metadata',
    forceAuthn:true,
    // Service Provider's Private Encryption Key
         decryptionPvk: fs.readFileSync(__dirname + '/cert/decryption_key.pem', 'utf8'),
        // Service Provider's Private Signing Key
        //privateCert: fs.readFileSync(__dirname + '/cert/signing_key.pem', 'utf8'), 
    // Identity Provider's Signing Certificate in a single line
    cert: process.env.SSO_CERT,
    callbackUrl: 'http://localhost:8000/user/login/sso/callback',
    // NameID format used by Identity Provider
    identifierFormat: "urn:oasis:names:tc:SAML:2.0:nameid-format:email",
    logoutUrl:'https://meharshjain-dev.onelogin.com/trust/saml2/http-redirect/slo/1836210',
    disableRequestedAuthnContext: true

}, function (profile, done) {
    return done(null, profile);
},
function (profile, done) {
  // for logout
  return done(null,profile);
}
);

passport.use(samlStrategy);

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated())
        return next();
    else
        return res.redirect('/login');
}

app.get('/login',
    passport.authenticate('saml', { failureRedirect: '/login/fail' }),
    function (req, res) {
        res.redirect('/');
    }
);

app.get('/',
    ensureAuthenticated,
    function (req, res) {
        res.redirect('/metadata');
    }
);
app.get('/metadata',function (req, res) {
    var decryptionCert = fs.readFileSync(__dirname + '/cert/decryption_cert.pem', 'utf8');
    var signingCert = fs.readFileSync(__dirname + '/cert/signing_cert.pem', 'utf8');
    var data = samlStrategy.generateServiceProviderMetadata(decryptionCert)
    fs.writeFile("metadata.xml", data, (err) => { if (err) console.log(err); });
    res.type('application/xml');
    res.status(200).send(data);
    }
);
app.post('/user/login/sso/callback',
    passport.authenticate('saml', { failureRedirect: '/login/fail' }),
    function (req, res) {
        const example = req.body.SAMLResponse;
        //console.log(example)
        fs.writeFile("response.xml", example, (err) => { if (err) console.log(err); });
        //const inflated = zlib.inflateRawSync(Buffer.from(example, 'base64')).toString('ascii');
        //console.log("Inflated:", inflated);
        res.redirect('/');
    }
);

app.get('/login/fail',
    function (req, res) {
        res.status(401).send('Login failed');
    }
);

app.get('/logout', function(req, res) {
    console.log(req.user);
    samlStrategy.logout(req, function(err, request) {
      console.log(request);
      if (!err) {
        res.redirect(request);
      }
    });
  });
  
  app.get('/logout/callback', function(req, res) {
    req.logout();
    res.redirect('/harshjain');
  });

const server = app.listen(8000, function () {
    console.log('Listening on port %d', server.address().port)
});
