const mongoose = require('mongoose');

const DiscountSchema = new mongoose.Schema({
  code: { type: String, required: true },
  percentage: { type: Number, required: true },
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model('Discount', DiscountSchema);
