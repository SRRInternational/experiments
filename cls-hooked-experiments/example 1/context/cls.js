const cls = require("cls-hooked");
const appNamespace = cls.createNamespace("appNamespace");

const middleware = (req, res, next) => {
  appNamespace.bindEmitter(req);
  appNamespace.bindEmitter(res);

  appNamespace.run(() => {
    appNamespace.set("session", req.session); // Store session in CLS
    next();
  });
};

module.exports = { middleware, appNamespace };
