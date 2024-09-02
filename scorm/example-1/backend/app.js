const express = require("express");
const connectDB = require("./config/db");
const scormRoutes = require("./routes/scormRoutes");
const courseRoutes = require("./routes/courseRoutes");
const cors = require("cors");
const path = require("path");
const fs = require("fs").promises;
const Course = require("./models/Course");
require("dotenv").config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/scorm", scormRoutes);
app.use("/api/courses", courseRoutes);
app.use("/uploads", express.static("uploads"));

app.get("/api/courses/:identifier/preview", async (req, res) => {
  const { identifier } = req.params;

  try {
    const filePath = path.join(
      __dirname,
      "public",
      "uploads",
      identifier,
      "index.html"
    );
    // res.sendFile(filePath);
    const stat = await fs.stat(filePath);

    if (stat.isDirectory()) {
      return res.status(403).json({ error: "Directory access is forbidden" });
    }

    const fileContents = await fs.readFile(filePath);
    const contentType = getContentType(filePath);

    console.log(contentType);

    res.status(200).set("Content-Type", contentType).send(fileContents);
  } catch (error) {
    res.status(404).json({ error: "File not found" });
  }
});

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".mp4": "video/mp4",
    ".webm": "video/webm",
    ".mp3": "audio/mpeg",
    ".wav": "audio/wav",
  };
  return mimeTypes[ext] || "application/octet-stream";
}

module.exports = app;
