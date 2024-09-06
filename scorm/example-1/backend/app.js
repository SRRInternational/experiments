const express = require("express");
const connectDB = require("./config/db");
const scormRoutes = require("./routes/scormRoutes");
const courseRoutes = require("./routes/courseRoutes");
const cors = require("cors");
const path = require("path");
const fs = require("fs").promises;
require("dotenv").config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/scorm", scormRoutes);
app.use("/api/courses", courseRoutes);
app.use("/uploads", express.static("uploads"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/courses/:identifier/preview", async (req, res) => {
  const { identifier } = req.params;
  const courseDir = path.join(__dirname, "public", "uploads", identifier);
  const coursePath = `/uploads/${identifier}/index_lms.html`;
  try {
    const stat = await fs.stat(courseDir);
    if (!stat.isDirectory()) {
      return res.status(404).json({ error: "Course not found" });
    }

    // Send HTML with iframe and injected SCORM API
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>SCORM Course Preview</title>
        <style>
          body, html { margin: 0; padding: 0; height: 100%; overflow: hidden; }
          iframe { width: 100%; height: 100%; border: none; }
        </style>
      </head>
      <body>
        <iframe 
          id="scormCourseFrame" 
          src="/uploads/${identifier}/index_lms.html" 
          allowfullscreen>
        </iframe>
        <script>
          // SCORM API Implementation
          (function() {
            var errorCode = "0";
            var errorString = "";
            var apiLogEnabled = false;
            var courseId = "${identifier}";
            var learnerId = "someLearnerId"; // Replace with actual learner ID
            var lastKnownState = {};
    
            function apiLog(message) {
              if (apiLogEnabled) {
                console.log("SCORM API: " + message);
              }
            }
    
            function LMSInitialize(str) {
              apiLog("LMSInitialize called with: " + str);
              fetch(\`/api/scorm/\${courseId}/\${learnerId}/LMSInitialize\`, {
                method: 'POST',
                body: JSON.stringify({ str }),
                headers: { 'Content-Type': 'application/json' }
              })
              .then(res => res.json())
              .then(data => {
                if (data.success) {
                  errorCode = "0";
                  lastKnownState = data.cmi || {};
                } else {
                  errorCode = "101";
                  errorString = "General Initialization Failure";
                }
              })
              .catch(err => {
                errorCode = "101";
                errorString = "General Initialization Failure";
              });
              return "true"; // Always return "true" synchronously
            }
    
            function LMSFinish(str) {
              apiLog("LMSFinish called with: " + str);
              fetch(\`/api/scorm/\${courseId}/\${learnerId}/LMSFinish\`, {
                method: 'POST',
                body: JSON.stringify({ str }),
                headers: { 'Content-Type': 'application/json' }
              })
              .then(res => res.json())
              .then(data => {
                if (data.success) {
                  errorCode = "0";
                } else {
                  errorCode = "301";
                  errorString = "General Termination Failure";
                }
              })
              .catch(err => {
                errorCode = "301";
                errorString = "General Termination Failure";
              });
              return "true"; // Always return "true" synchronously
            }
    
            function LMSGetValue(str) {
              apiLog("LMSGetValue called with: " + str);
              var value = lastKnownState[str] || "";
              fetch(\`/api/scorm/\${courseId}/\${learnerId}/LMSGetValue\`, {
                method: 'POST',
                body: JSON.stringify({ key: str }),
                headers: { 'Content-Type': 'application/json' }
              })
              .then(res => res.json())
              .then(data => {
                if (data.success) {
                  errorCode = "0";
                  lastKnownState[str] = data.value;
                } else {
                  errorCode = "201";
                  errorString = "General Get Failure";
                }
              })
              .catch(err => {
                errorCode = "201";
                errorString = "General Get Failure";
              });
              return value; // Return the last known value synchronously
            }
    
            function LMSSetValue(str, val) {
              apiLog("LMSSetValue called with: " + str + ", " + val);
              lastKnownState[str] = val; // Update the last known state immediately
              fetch(\`/api/scorm/\${courseId}/\${learnerId}/LMSSetValue\`, {
                method: 'POST',
                body: JSON.stringify({ key: str, value: val }),
                headers: { 'Content-Type': 'application/json' }
              })
              .then(res => res.json())
              .then(data => {
                if (data.success) {
                  errorCode = "0";
                } else {
                  errorCode = "351";
                  errorString = "General Set Failure";
                }
              })
              .catch(err => {
                errorCode = "351";
                errorString = "General Set Failure";
              });
              return "true"; // Always return "true" synchronously
            }
    
            function LMSCommit(str) {
              apiLog("LMSCommit called with: " + str);
              fetch(\`/api/scorm/\${courseId}/\${learnerId}/LMSCommit\`, {
                method: 'POST',
                body: JSON.stringify({ str }),
                headers: { 'Content-Type': 'application/json' }
              })
              .then(res => res.json())
              .then(data => {
                if (data.success) {
                  errorCode = "0";
                } else {
                  errorCode = "391";
                  errorString = "General Commit Failure";
                }
              })
              .catch(err => {
                errorCode = "391";
                errorString = "General Commit Failure";
              });
              return "true"; // Always return "true" synchronously
            }
    
            function LMSGetLastError() {
              return errorCode;
            }
    
            function LMSGetErrorString(errCode) {
              return errorString;
            }
    
            function LMSGetDiagnostic(errCode) {
              return "Diagnostic info for error code: " + errCode;
            }
    
            // SCORM 1.2 API
            window.API = {
              LMSInitialize: LMSInitialize,
              LMSFinish: LMSFinish,
              LMSGetValue: LMSGetValue,
              LMSSetValue: LMSSetValue,
              LMSCommit: LMSCommit,
              LMSGetLastError: LMSGetLastError,
              LMSGetErrorString: LMSGetErrorString,
              LMSGetDiagnostic: LMSGetDiagnostic
            };
    
            // SCORM 2004 API (if needed)
            window.API_1484_11 = {
              Initialize: LMSInitialize,
              Terminate: LMSFinish,
              GetValue: LMSGetValue,
              SetValue: LMSSetValue,
              Commit: LMSCommit,
              GetLastError: LMSGetLastError,
              GetErrorString: LMSGetErrorString,
              GetDiagnostic: LMSGetDiagnostic
            };
          })();
        </script>
      </body>
      </html>
    `);
  } catch (error) {
    res.status(404).json({ error: "Course not found" });
  }
});

module.exports = app;
