const express = require('express');
const domain = require('domain');

const app = express();
const PORT = 3000;

// Middleware to create a domain for each request
app.use((req, res, next) => {
  const reqDomain = domain.create();

  reqDomain.on('error', (err) => {
    console.error('Error caught in domain:', err.message);
    res.status(500).json({ error: 'Something went wrong!' });
  });

  reqDomain.run(next);
});

// Simulate an endpoint with asynchronous errors
app.get('/error', (req, res) => {
  setTimeout(() => {
    // This will be caught by the domain
    throw new Error('Asynchronous error in /error route!');
  }, 100);
});

// Simulate a normal endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Express app!');
});

// Global error handler (fallback)
app.use((err, req, res, next) => {
  console.error('Global error handler:', err.message);
  res.status(500).json({ error: 'Internal server error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
