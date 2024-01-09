require('dotenv').config();

var express = require('express');
var session = require('express-session');
var request = require('request');

// Use Passport with OpenId Connect strategy to
// authenticate users with OneLogin
var passport = require('passport')
var OneLoginStrategy = require('passport-openidconnect').Strategy
const baseUri = `${ process.env.OIDC_BASE_URI }/oidc/2`

// Configure the OpenId Connect Strategy
// with credentials obtained from OneLogin
passport.use(new OneLoginStrategy({
  issuer: baseUri,
  clientID: process.env.OIDC_CLIENT_ID,
  clientSecret: process.env.OIDC_CLIENT_SECRET,
  authorizationURL: `${baseUri}/auth`,
  userInfoURL: `${baseUri}/me`,
  tokenURL: `${baseUri}/token`,
  callbackURL: process.env.OIDC_REDIRECT_URI,
  passReqToCallback: true
},
function(req, issuer, userId, profile, accessToken, refreshToken, params, cb) {

  console.log('issuer:', issuer);
  console.log('userId:', userId);
  console.log('accessToken:', accessToken);
  console.log('refreshToken:', refreshToken);
  console.log('params:', params);

  req.session.accessToken = accessToken;
  req.session.idToken = params['id_token'];

  return cb(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

var app = express();

app.use(session({
  secret: 'secret squirrel',
  resave: false,
  saveUninitialized: true
}))

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// auth starting, take username pass for onelogin
app.get('/', passport.authenticate('openidconnect', {successReturnToOrRedirect: "/", scope: 'profile'}),
(req,res)=>{console.log('hello')});

// redirect url redirected here after auth
app.get('/oauth/callback', passport.authenticate('openidconnect', {
  callback: true,
  failureRedirect: '/failed'
}),(req, res, next)=>{
  console.log(req.user)
});

// Destroy both the local session and
// revoke the access_token at OneLogin
app.get('/logout', function(req, res){
  request.post(`https://meharshjain-dev.onelogin.com/oidc/token/revocation`, {
    'form':{
      'client_id': process.env.OIDC_CLIENT_ID,
      'client_secret': process.env.OIDC_CLIENT_SECRET,
      'token': req.session.accessToken,
      'token_type_hint': 'access_token'
    }
  },function(err, response, body){
    console.log('Session Revoked at OneLogin');
    res.redirect('/failed');
  });
});

app.listen(5000)