const Course = require("../models/Course");
const unzipCourse = require("../utils/unzip");
const fs = require("fs");
const path = require("path");

const uploadCourse = async (req, res) => {
  const { title, identifier } = req.body;
  const zipFilePath = req.file.path;
  const outputPath = path.join(
    __dirname,
    "..",
    "public",
    "uploads",
    identifier
  );

  await unzipCourse(zipFilePath, outputPath);

  const manifestPath = path.join(outputPath, "imsmanifest.xml");
  const launchUrl = `uploads/${identifier}/index_lms.html`;

  const course = new Course({
    title,
    identifier,
    launchUrl,
    manifest: fs.readFileSync(manifestPath, "utf8"),
  });

  await course.save();

  res.json({ success: true, course });
};

module.exports = { uploadCourse };
