// backend/models/ScormData.js
const mongoose = require("mongoose");

const ScormDataSchema = new mongoose.Schema({
  learnerId: String,
  courseId: String,
  cmi: Object, // Store all SCORM tracking data here
});

module.exports = mongoose.model("ScormData", ScormDataSchema);
