const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    itemImagesId: String,
    gemStoneId: String,
    brand: String,
    accessoryType: String,
    itemName: String,
    description: String,
    price: Number,
    size: String,
    weight: String,
    createdDate: { type: Date, default: Date.now },
    updatedDate: Date,
    status: String,
    quantity: Number,
    isBuyBack: Boolean
});

module.exports = mongoose.model('Item', ItemSchema);
