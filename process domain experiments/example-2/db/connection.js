const mongoose = require('mongoose');

// MongoDB connection string (replace with your MongoDB URI)
const MONGO_URI = 'mongodb://localhost/processDomainExperiments';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Exit on connection failure
  }
};

module.exports = connectDB;
