const express = require("express");

const app = express();
const PORT = 3000;

const emailQueue = [];

let isProcessing = false;

app.use(express.json());
app.use(express.static("public"));

const processQueue = async () => {
  if (isProcessing || emailQueue.length === 0) return;

  isProcessing = true;

  while (emailQueue.length > 0) {
    const job = emailQueue.shift();
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(`Processing email for: ${job.email}`);

    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(`Email sent to: ${job.email}`);
  }

  isProcessing = false;
};

app.post("/add-email", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  emailQueue.push({ email });
  console.log(`Job added for email: ${email}`);

  processQueue();

  res.json({ message: `Email job added for ${email}` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
