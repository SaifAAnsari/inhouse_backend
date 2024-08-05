// db.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require("./routes")

// Initialize Express app
const app = express();
app.use(
    cors({
      origin: 'http://localhost:3000', 
      credentials: true,
    })
  ); 

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/inhouse', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Error connecting to MongoDB', err));

app.use('/', routes);


// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Handle process termination
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed due to app termination');
    process.exit(0);
  });
});
