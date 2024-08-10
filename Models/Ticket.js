const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  mobile: { type: Number, required: false},
  gender: { 
    type: String, 
    required: true, 
    enum: ['male', 'female', 'non-binary', 'other'] 
  },
  creationDate: { type: Date, default: Date.now },
   
});

module.exports = mongoose.model('Ticket', ticketSchema);