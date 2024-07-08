const mongoose = require('mongoose');

const CollectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
});

module.exports = mongoose.model('Collection', CollectionSchema);
