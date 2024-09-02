// backend/routes/scormRoutes.js
const express = require("express");
const {
  LMSInitialize,
  LMSSetValue,
  LMSCommit,
  LMSFinish,
} = require("../controllers/scormController");
const router = express.Router();

router.post("/initialize", LMSInitialize);
router.post("/setvalue", LMSSetValue);
router.post("/commit", LMSCommit);
router.post("/finish", LMSFinish);

module.exports = router;
