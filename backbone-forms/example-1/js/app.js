var app = app || {};

app.initialize = function () {
  var userModel = new app.UserModel();
  var userFormView = new app.UserFormView({ model: userModel });
};
