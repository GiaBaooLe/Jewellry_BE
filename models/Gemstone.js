const mongoose = require('mongoose');

const GemstoneSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

module.exports = mongoose.model('Gemstone', GemstoneSchema);
