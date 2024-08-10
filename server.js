const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI )
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Add this error handling for the require statement
try {
  const ticketRoutes = require('./routes/ticketRoutes');
  app.use('/tickets', ticketRoutes);
} catch (error) {
  console.error('Error loading ticket routes:', error);
  console.log('Current directory:', __dirname);
  console.log('Files in routes directory:', require('fs').readdirSync(path.join(__dirname, 'routes')));
}

app.get("/", (req, res) => { 
  res.send("Hello Geeksdfdfd"); 
}); 


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});