// backend/models/Course.js
const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  title: String,
  identifier: String,
  launchUrl: String,
  manifest: String,
});

module.exports = mongoose.model("Course", CourseSchema);
