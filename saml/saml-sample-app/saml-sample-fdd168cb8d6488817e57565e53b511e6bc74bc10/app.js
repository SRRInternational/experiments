var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 今回使用するモジュールを追加でインポート
var dotenv = require('dotenv');
var passport = require('passport');
var saml = require('passport-saml');
var session = require('express-session');

var app = express();

// .envをロード
dotenv.load();

// SAML認証で取得したユーザー情報をシリアライズしてセッションに埋め込み(req.userでアクセス可能)
// Passportに関しては、http://knimon-software.github.io/www.passportjs.org/guide/configure/を参照
passport.serializeUser(function(user, done) {
  done(null, user);
});

//　リクエストに含まれるユーザー情報をデシリアライズ
passport.deserializeUser(function(user, done) {
  done(null, user);
});

// passport-samlの設定
// process.env.xxxはdotenvでロードした情報(後述する.envに記載されている情報)
// callbackUrl: IdPでのSSOログインが行われた場合に、コールバックされるURL
// entryPoint: SSOログイン時にアクセスするIdPのURL
// issuer: IdPに提供される本アプリケーション(SP)の識別子
// logoutUr: SSOログアウト時にアクセスするIdPのURL
var samlStrategy = new saml.Strategy({
  callbackUrl:process.env.CALLBACK_URL,
  entryPoint: process.env.ENTRY_POINT,
  issuer: process.env.issuer,
  cert: process.env.SSO_CERT,
  logoutUrl: process.env.LOGOUT_URL
}, function(profile, done) {
  var user = profile;
  return done(null, user);
});


// passportを使用するよう構成
passport.use(samlStrategy);
app.use(passport.initialize());
app.use(passport.session());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// 認証が通れば、/にリダイレクト
// 認証NGの場合は、認証失敗詳細(failureFlash: true)も含めて/にリダイレクト
app.get('/login', passport.authenticate('saml', {
  failureRedirect: '/',
  failureFlash: true
}), function(req, res) {
  res.redirect('/');
});

// IdPでのSSOログイン後、コールバックされるURL
app.post('/login/callback', passport.authenticate('saml', {
  failureRedirect: '/',
  failureFlash: true
}), function(req, res) {
  res.redirect('/');
});

// ログアウト処理
app.get('/logout', function(req, res) {
  // samlStrategy.logut uses req.user
  console.log(req.user);

  // IdPでのSSOログアウトを実施
  samlStrategy.logout(req, function(err, request) {
    console.log(err);
    console.log(request);
    if (!err) {
      res.redirect(request);
    }
  });
});

// IdPでのSSOログアウト後、コールバックされるURL
// アプリケーション(passport)のログアウト処理を実施
app.get('/logout/callback', function(req, res) {
  req.logout();
  res.redirect('/');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(8000,function(){console.log('started')})