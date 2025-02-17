const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const domain = require('domain');
const path = require('path');

// Create an Express app
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
// app.use(express.json());
app.use(express.static('public')); // Serve static files from 'public' folder

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Connect to MongoDB (replace with your MongoDB URI)
mongoose.connect('mongodb://127.0.0.1:27017/todoapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  domainsEnabled: true // Enable domain support in Mongoose
});

// Define a To-Do task schema
const TodoSchema = new mongoose.Schema({
  title: String,
  completed: { type: Boolean, default: false }
});
const Todo = mongoose.model('Todo', TodoSchema);

// Utility function to handle domain error in async operations
function handleDomainAsyncOperation(asyncOperation) {
  const d = domain.create(); // Create a domain to track async operations
  d.on('error', (err) => {
    console.error('🚨 Domain caught error:', err);
  });
  return d.run(asyncOperation);
}

// API Route to create a new To-Do task
app.post('/todo', async (req, res) => {
  const { title } = req.body;

  // Use domain error handling
  handleDomainAsyncOperation(async () => {
    const newTodo = new Todo({ title });
    await newTodo.save();
    res.status(201).json(newTodo);
  });
});

// API Route to get all To-Do tasks
app.get('/todos', async (req, res) => {
  handleDomainAsyncOperation(async () => {
    const todos = await Todo.find();
    res.status(200).json(todos);
  });
});

// API Route to update a To-Do task by ID
app.put('/todo/:id', async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  handleDomainAsyncOperation(async () => {
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json(updatedTodo);
  });
});

// API Route to delete a To-Do task by ID
app.delete('/todo/:id', async (req, res) => {
  const { id } = req.params;

  handleDomainAsyncOperation(async () => {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      return res.status(404).json({ message: 'Todo not found' });
    }
    res.status(200).json({ message: 'Todo deleted' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
