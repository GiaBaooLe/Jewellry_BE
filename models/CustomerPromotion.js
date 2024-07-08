const mongoose = require('mongoose');

const CustomerPromotionSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  promotionCode: { type: String, required: true },
  discount: Number,
  status: { type: String, enum: ['pending', 'approved'], default: 'pending' },
});

module.exports = mongoose.model('CustomerPromotion', CustomerPromotionSchema);
