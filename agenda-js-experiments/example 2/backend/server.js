const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Agenda = require("agenda");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const mongoConnectionString = "mongodb://127.0.0.1/agenda";
const agenda = new Agenda({ db: { address: mongoConnectionString } });

// Fetch a quote from ZenQuotes API
async function fetchQuote() {
  try {
    const response = await axios.get("https://zenquotes.io/api/random");
    return response.data[0].q + " - " + response.data[0].a;
  } catch (error) {
    console.error("Error fetching quote:", error.message);
    return "Stay motivated! - Anonymous";
  }
}

// Define Agenda job for sending quotes
agenda.define("send quote", async (job) => {
  const { interval } = job.attrs.data;
  const quote = await fetchQuote();
  console.log(`[Interval ${interval}s] Quote: ${quote}`);
});

// Route to fetch quotes directly (proxy)
app.get("/quote", async (req, res) => {
  const quote = await fetchQuote();
  res.json({ quote });
});

// Route to schedule quotes
app.post("/schedule", async (req, res) => {
  const { interval } = req.body;

  if (![5, 10, 15].includes(interval)) {
    return res
      .status(400)
      .json({ error: "Invalid interval. Choose 5, 10, or 15 seconds." });
  }

  await agenda.start();
  await agenda.every(`${interval} seconds`, "send quote", { interval });

  res.json({ success: true, interval });
});

const PORT = 3000;
app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  await agenda.start();
});
