// backend/routes/courseRoutes.js
const express = require("express");
const multer = require("multer");
const { uploadCourse } = require("../controllers/courseController");
const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("course"), uploadCourse);

module.exports = router;
