// backend/routes/scormRoutes.js
const express = require("express");
const {
  LMSInitialize,
  LMSSetValue,
  LMSCommit,
  LMSFinish,
} = require("../controllers/scormController");
const router = express.Router();

router.post("/:courseId/:learnerId/LMSInitialize", LMSInitialize);
router.post("/:courseId/:learnerId/LMSSetValue", LMSSetValue);
router.post("/:courseId/:learnerId/LMSCommit", LMSCommit);
router.post("/:courseId/:learnerId/LMSFinish", LMSFinish);

module.exports = router;
