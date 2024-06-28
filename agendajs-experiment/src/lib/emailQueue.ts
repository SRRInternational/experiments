// app/lib/emailQueue.ts
import Queue from "bull";

interface EmailJob {
  recipientEmail: string;
  senderEmail: string;
  emailContent: string;
}

const emailQueue = new Queue<EmailJob>(
  "email",
  process.env.REDIS_URL as string
);

export default emailQueue;
