// index.js
const express = require("express");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const { auditLogger } = require("./lib/fedramp-audit-logger");

const app = express();
const PORT = 5000;
const dataFilePath = path.join(__dirname, "randomData.json");
// app.use(auditLogger());

// Function to fetch data from a random API
async function fetchData() {
  try {
    const response = await axios.get("https://randomuser.me/api/");
    const data = response.data;

    // Store data locally
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}

// Fetch data every 5 seconds
setInterval(fetchData, 5000);

// Define an API endpoint to retrieve the stored data
app.get("/data", auditLogger, (req, res) => {
  try {
    const data = fs.readFileSync(dataFilePath, "utf8");
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).send("Error reading data");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
