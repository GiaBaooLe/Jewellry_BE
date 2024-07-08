const mongoose = require('mongoose');

const ReturnPolicySchema = new mongoose.Schema({
  policyName: { type: String, required: true },
  description: { type: String, required: true },
  active: { type: Boolean, default: true }
});

module.exports = mongoose.model('ReturnPolicy', ReturnPolicySchema);
