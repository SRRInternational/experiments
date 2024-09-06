const ScormData = require("../models/ScormData");

const defaultCmi = {
  core: {
    score: { max: "", min: "", raw: "" },
    credit: "credit",
    entry: "ab-initio",
    lesson_mode: "normal",
    lesson_status: "not attempted",
    session_time: "0000:00:00.00",
    total_time: "0000:00:00.00",
    exit: "",
    lesson_location: "",
  },
  interactions: [],
  objectives: [],
  student_preference: { language: "en" },
  suspend_data: "",
  comments: "",
  comments_from_lms: "",
  launch_data: "",
};

const LMSInitialize = async (req, res) => {
  const { learnerId, courseId } = req.params;

  try {
    let data = await ScormData.findOne({ learnerId, courseId });
    if (!data) {
      data = new ScormData({
        learnerId,
        courseId,
        cmi: defaultCmi,
      });
      await data.save();
    }

    res.json({
      success: true,
      cmi: data.cmi,
    });
  } catch (error) {
    console.error("Error in LMSInitialize:", error);
    res
      .status(500)
      .json({ success: false, error: "101", message: "Internal Server Error" });
  }
};

const LMSSetValue = async (req, res) => {
  const { learnerId, courseId } = req.params;
  const { key, value } = req.body;

  try {
    const scormData = await ScormData.findOne({ learnerId, courseId });
    if (!scormData) {
      return res
        .status(404)
        .json({ success: false, error: "351", message: "Data not found" });
    }

    // Function to set nested values dynamically
    const setNestedValue = (obj, keyPath, value) => {
      const keys = keyPath.split(".");
      let current = obj;

      while (keys.length > 1) {
        const k = keys.shift();
        if (!current[k]) {
          current[k] = {};
        }
        current = current[k];
      }
      current[keys[0]] = value;
    };

    // Update the cmi object based on the key path
    setNestedValue(scormData.cmi, key, value);
    await scormData.save();

    res.json({ success: true });
  } catch (error) {
    console.error("Error in LMSSetValue:", error);
    res
      .status(500)
      .json({ success: false, error: "351", message: "Internal Server Error" });
  }
};

const LMSCommit = async (req, res) => {
  const { learnerId, courseId } = req.params;

  try {
    // No specific SCORM action needed for commit, just an acknowledgment
    res.json({ success: true });
  } catch (error) {
    console.error("Error in LMSCommit:", error);
    res
      .status(500)
      .json({ success: false, error: "401", message: "Internal Server Error" });
  }
};

const LMSFinish = async (req, res) => {
  const { learnerId, courseId } = req.params;

  try {
    const result = await ScormData.findOne({ learnerId, courseId });
    if (!result) {
      return res
        .status(404)
        .json({ success: false, error: "301", message: "Data not found" });
    }

    result.cmi.core.exit = "logout";
    await result.save();

    res.json({ success: true });
  } catch (error) {
    console.error("Error in LMSFinish:", error);
    res
      .status(500)
      .json({ success: false, error: "301", message: "Internal Server Error" });
  }
};

const LMSGetValue = async (req, res) => {
  const { learnerId, courseId } = req.params;
  const { key } = req.body;

  try {
    const scormData = await ScormData.findOne({ learnerId, courseId });
    if (!scormData) {
      return res
        .status(404)
        .json({ success: false, error: "201", message: "Data not found" });
    }

    // Function to get nested value dynamically
    const getNestedValue = (obj, keyPath) => {
      const keys = keyPath.split(".");
      let current = obj;

      for (const k of keys) {
        if (current === undefined || current === null) {
          console.log("Current is null or undefined:", current);
          return "";
        }
        if (!Object.prototype.hasOwnProperty.call(current, k)) {
          console.log("Key not found:", k, "in object", current);
          return "";
        }
        current = current[k];
        console.log("Traversed to:", current);
      }

      return current;
    };

    // Retrieve the value from the cmi object based on the key path
    const value = getNestedValue(scormData.cmi, key); // Use scormData.cmi as the root for the key

    res.json({
      success: true,
      value: value !== undefined ? value.toString() : "",
    });
  } catch (error) {
    console.error("Error in LMSGetValue:", error);
    res
      .status(500)
      .json({ success: false, error: "201", message: "Internal Server Error" });
  }
};

const LMSGetLastError = (req, res) => {
  // This function should return the last error code
  // Return a default error code for simplicity
  res.json({ success: true, error: "0" });
};

const LMSGetErrorString = (req, res) => {
  // This function should return the error string for a given error code
  // Return a default error string for simplicity
  res.json({ success: true, errorString: "No error" });
};

const LMSGetDiagnostic = (req, res) => {
  // This function should return diagnostic information for a given error code
  // Return a default diagnostic message for simplicity
  res.json({ success: true, diagnostic: "No error occurred" });
};

module.exports = {
  LMSInitialize,
  LMSSetValue,
  LMSCommit,
  LMSFinish,
  LMSGetValue,
  LMSGetLastError,
  LMSGetErrorString,
  LMSGetDiagnostic,
};
