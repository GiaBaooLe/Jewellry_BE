const mongoose = require('mongoose');

const WarrantySchema = new mongoose.Schema({
    customerId: String,
    expiryDate: Date,
    createdDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Warranty', WarrantySchema);
