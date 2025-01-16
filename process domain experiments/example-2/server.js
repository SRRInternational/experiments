const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db/connection');
const userRoutes = require('./routes/users');
const path = require('path');
const app = express();
const PORT = 4000;

// Connect to MongoDB
connectDB();

// Middleware to serve static files (like index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);


// Global error handler
app.use((err, req, res, next) => {
  console.error('Global Error Handler:', err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
