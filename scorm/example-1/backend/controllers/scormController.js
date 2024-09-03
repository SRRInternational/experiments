const ScormData = require("../models/ScormData");

const LMSInitialize = async (req, res) => {
  const { learnerId, courseId } = req.params;
  console.log(req.params);

  try {
    let data = await ScormData.findOne({ learnerId, courseId });
    if (!data) {
      data = new ScormData({
        learnerId,
        courseId,
        cmi: {},
      });
      await data.save();
    }

    res.json({ success: true, message: "Session initialized successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to initialize session" });
  }
};

const LMSSetValue = async (req, res) => {
  const { learnerId, courseId } = req.params;
  const { key, value } = req.body;

  try {
    const scormData = await ScormData.findOne({ learnerId, courseId });
    if (!scormData) {
      return res.status(404).json({ error: "Data not found" });
    }

    scormData.cmi[key] = value;
    await scormData.save();

    res.json({ success: true, message: `Value for ${key} set successfully` });
  } catch (error) {
    res.status(500).json({ error: "Failed to set value" });
  }
};

const LMSCommit = async (req, res) => {
  res.json({ success: true, message: "Data committed successfully" });
};

const LMSFinish = async (req, res) => {
  const { learnerId, courseId } = req.params;

  try {
    const result = await ScormData.findOneAndDelete({ learnerId, courseId });
    if (!result) {
      return res.status(404).json({ error: "Data not found" });
    }

    res.json({
      success: true,
      message: "Session finished and data deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to finish session" });
  }
};

module.exports = { LMSInitialize, LMSSetValue, LMSCommit, LMSFinish };
