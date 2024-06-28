// app/lib/agenda.ts
import Agenda, { Job, JobAttributesData } from "agenda";
import nodemailer from "nodemailer";
import emailQueue from "./emailQueue";

interface EmailJobData extends JobAttributesData {
  recipientEmail: string;
  senderEmail: string;
  emailContent: string;
  bullJobId: string;
}

const agenda = new Agenda({
  db: { address: process.env.MONGODB_URI as string },
});

agenda.define<EmailJobData>("send-email", async (job: any) => {
  const { recipientEmail, senderEmail, emailContent, bullJobId } =
    job.attrs.data;

  const transporter = nodemailer.createTransport({
    // Configure your email service (e.g., SMTP details)
  });

  try {
    await transporter.sendMail({
      from: senderEmail,
      to: recipientEmail,
      subject: "Invitation",
      text: emailContent,
    });

    await emailQueue
      .getJob(bullJobId)
      .then((job: any) => job?.update({ status: "completed" }));
  } catch (error) {
    await emailQueue
      .getJob(bullJobId)
      .then((job: any) => job?.update({ status: "failed" }));
    throw error;
  }
});

(async function () {
  await agenda.start();
})();

export default agenda;
