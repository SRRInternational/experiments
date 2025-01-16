const express = require('express');
const domain = require('domain');
const User = require('../models/User');

const router = express.Router();

// Middleware to wrap requests in a domain
router.use((req, res, next) => {
  const reqDomain = domain.create();

  reqDomain.on('error', (err) => {
    console.error('Domain error:', err.message);
    res.status(500).json({ error: err.message });
  });

  reqDomain.run(next);
});

// Fetch all users
router.get('/', async (req, res, next) => {
  try {
    // throw new Error('Test error');
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
});

// Route to trigger a domain error
router.get('/triggerError', (req, res, next) => {
  // Deliberately throw an error inside the domain
  process.nextTick(() => {
    throw new Error('This is a forced domain error!');
  });
});

// Fetch a user by ID
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) throw new Error('User not found');
    res.json(user);
  } catch (error) {
    next(error);
  }
});

// Add a new user
router.post('/', async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
