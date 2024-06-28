const express = require("express");
const agenda = require("../jobs/emailJob");

const router = express.Router();

router.post("/schedule-email", async (req, res) => {
  const { to, subject, text, time } = req.body;

  await agenda.schedule(time, "send email", { to, subject, text });

  res.send("Email scheduled successfully");
});

module.exports = router;
