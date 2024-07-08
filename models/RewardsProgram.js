const mongoose = require('mongoose');

const RewardsProgramSchema = new mongoose.Schema({
    customerId: { type: String, required: true },
    pointsTotal: { type: Number, default: 0 }
});

module.exports = mongoose.model('RewardsProgram', RewardsProgramSchema);
