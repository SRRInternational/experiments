// backend/routes/scormRoutes.js
const express = require("express");
const {
  LMSInitialize,
  LMSSetValue,
  LMSCommit,
  LMSFinish,
  LMSGetValue,
} = require("../controllers/scormController");
const router = express.Router();

router.post("/:courseId/:learnerId/LMSInitialize", LMSInitialize);
router.post("/:courseId/:learnerId/LMSSetValue", LMSSetValue);
router.post("/:courseId/:learnerId/LMSCommit", LMSCommit);
router.post("/:courseId/:learnerId/LMSFinish", LMSFinish);
router.post("/:courseId/:learnerId/LMSGetValue", LMSGetValue);

module.exports = router;

// "/api/scorm/:courseId/:learnerId/LMSInitialize"
// "/api/scorm/:courseId/:learnerId/LMSSetValue"
// "/api/scorm/:courseId/:learnerId/LMSCommit"
// "/api/scorm/:courseId/:learnerId/LMSFinish"
