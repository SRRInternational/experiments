const nodemailer = require("nodemailer");
const Agenda = require("agenda");
require("dotenv").config();

const agenda = new Agenda({
  db: { address: process.env.DB_URI, collection: "agendaJobs" },
});

agenda.define("send email", async (job) => {
  const { to, subject, text } = job.attrs.data;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.APP_EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  let mailOptions = {
    from: process.env.APP_EMAIL,
    to: to,
    subject: subject,
    text: text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.log("Error sending email:", error);
  }
});

agenda.start();

module.exports = agenda;
