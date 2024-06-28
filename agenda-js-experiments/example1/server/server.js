const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');
const emailRoutes = require('./routes/emailRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

db.connect();

app.use('/api', emailRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
