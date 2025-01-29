// app.js
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const User = require('./models/User');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('public'));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

// Session setup
app.use(
  session({
    secret: 'your-session-secret', // Use an environment variable in production
    resave: false,
    saveUninitialized: false,
  })
);

// Middleware to verify JWT and attach user to req.auth
const authenticateJWT = (req, res, next) => {
  const token = req.session.token || req.headers.authorization?.split(' ')[1];

  if (!token) return res.redirect('/login');

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.redirect('/login');
    req.auth = { user: decoded };
    next();
  });
};

// Routes

// Home Route
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Node.js Auth App</h1> <a href="/register">Register</a> <a href="/login">Login</a>');
});

// Register Route
app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ email, password: hashedPassword });
  await newUser.save();
  res.redirect('/login');
});

// Login Route
app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(401).send('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).send('Invalid credentials');

  // Generate JWT and store it in session
  const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  req.session.token = token; // Store JWT in session
  res.redirect('/dashboard');
});

// Dashboard Route (Protected)
app.get('/dashboard', authenticateJWT, (req, res) => {
  console.log('Logged in user:', req.auth.user); // Console log user info from req.auth.user
  res.render('dashboard', { user: req.auth.user });
});

// Logout Route
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).send('Error during logout');
    res.redirect('/login');
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
