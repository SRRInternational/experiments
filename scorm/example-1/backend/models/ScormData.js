const mongoose = require("mongoose");

const ScormDataSchema = new mongoose.Schema({
  learnerId: { type: String, required: true },
  courseId: { type: String, required: true },
  cmi: {
    core: {
      student_id: { type: String },
      student_name: { type: String },
      lesson_location: { type: String, default: "" }, // Bookmark location in course
      credit: { type: String, default: "credit" }, // Could be "no-credit" based on course type
      lesson_status: { type: String, default: "not attempted" }, // Passed, failed, completed, etc.
      entry: { type: String, default: "ab-initio" }, // Ab-initio or resume
      score: {
        raw: { type: String, default: "" },
        max: { type: String, default: "" },
        min: { type: String, default: "" },
      },
      total_time: { type: String, default: "0000:00:00" }, // Cumulative time spent
      exit: { type: String, default: "" }, // suspend, logout, etc.
      session_time: { type: String, default: "0000:00:00" }, // Time for current session
    },
    suspend_data: { type: String, default: "" }, // Resume data
    launch_data: { type: String, default: "" }, // Additional data passed on course launch
    comments: { type: String, default: "" }, // Learner comments
    comments_from_lms: { type: String, default: "" }, // LMS comments for the learner
    objectives: [
      {
        id: { type: String, default: "" },
        score: {
          raw: { type: String, default: "" },
          max: { type: String, default: "" },
          min: { type: String, default: "" },
        },
        status: { type: String, default: "not attempted" }, // Objective status
      },
    ],
    interactions: [
      {
        id: { type: String, default: "" },
        type: { type: String, default: "" }, // Interaction type (true-false, choice, etc.)
        objectives: [{ type: String }], // Interaction objectives
        correct_responses: [
          {
            pattern: { type: String, default: "" }, // Expected pattern for correct response
          },
        ],
        learner_response: { type: String, default: "" }, // Learner's answer
        result: { type: String, default: "" }, // Outcome (correct, incorrect, etc.)
        weighting: { type: String, default: "" }, // Weight assigned to the interaction
        time: { type: String, default: "" }, // Timestamp for interaction
        latency: { type: String, default: "" }, // Time taken for the response
      },
    ],
  },
});

module.exports = mongoose.model("ScormData", ScormDataSchema);
