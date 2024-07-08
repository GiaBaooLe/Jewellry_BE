const mongoose = require('mongoose');

const ItemImageSchema = new mongoose.Schema({
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
  imageUrl: { type: String, required: true }
});

module.exports = mongoose.model('ItemImage', ItemImageSchema);
