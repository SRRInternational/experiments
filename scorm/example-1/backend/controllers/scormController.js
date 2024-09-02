// backend/controllers/scormController.js
const ScormData = require("../models/ScormData");

const LMSInitialize = async (req, res) => {
  const { learnerId, courseId } = req.body;

  let scormData = await ScormData.findOne({ learnerId, courseId });
  if (!scormData) {
    scormData = new ScormData({ learnerId, courseId, cmi: {} });
    await scormData.save();
  }

  res.json({ success: true });
};

const LMSSetValue = async (req, res) => {
  const { learnerId, courseId, key, value } = req.body;

  let scormData = await ScormData.findOne({ learnerId, courseId });
  if (!scormData) return res.status(404).json({ error: "Data not found" });

  scormData.cmi[key] = value;
  await scormData.save();

  res.json({ success: true });
};

const LMSCommit = async (req, res) => {
  res.json({ success: true });
};

const LMSFinish = async (req, res) => {
  const { learnerId, courseId } = req.body;

  await ScormData.findOneAndDelete({ learnerId, courseId });

  res.json({ success: true });
};

module.exports = { LMSInitialize, LMSSetValue, LMSCommit, LMSFinish };
