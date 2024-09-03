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

app.use("/api/courses/:identifier/preview", async (req, res, next) => {
  const { identifier } = req.params;
  const courseDir = path.join(__dirname, "public", "uploads", identifier);

  try {
    const stat = await fs.stat(courseDir);

    if (!stat.isDirectory()) {
      return res.status(404).json({ error: "Course not found" });
    }

    // Serve static files from the course directory
    express.static(courseDir)(req, res, next);
  } catch (error) {
    res.status(404).json({ error: "Course not found" });
  }
});

module.exports = app;
