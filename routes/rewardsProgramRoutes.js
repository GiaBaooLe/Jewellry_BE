const express = require('express');
const router = express.Router();
const RewardsProgram = require('../models/RewardsProgram.js');

// GET /api/RewardsProgram
router.get('/', async (req, res) => {
    try {
        const rewards = await RewardsProgram.find();
        res.status(200).json(rewards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST /api/RewardsProgram
router.post('/', async (req, res) => {
    const { customerId, addPoints } = req.body;
    try {
        let rewardsProgram = await RewardsProgram.findOne({ customerId });
        if (rewardsProgram) {
            rewardsProgram.pointsTotal += addPoints;
        } else {
            rewardsProgram = new RewardsProgram({ customerId, pointsTotal: addPoints });
        }
        await rewardsProgram.save();
        res.status(200).json(rewardsProgram);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /api/RewardsProgram/:customerId
router.get('/:customerId', async (req, res) => {
    const { customerId } = req.params;
    try {
        const rewardsProgram = await RewardsProgram.findOne({ customerId });
        if (rewardsProgram) {
            res.status(200).json(rewardsProgram);
        } else {
            res.status(404).json({ message: 'Rewards Program not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT /api/RewardsProgram/:customerId
router.put('/:customerId', async (req, res) => {
    const { customerId } = req.params;
    const { points } = req.query;
    try {
        const rewardsProgram = await rewardsProgram.findOneAndUpdate({ customerId }, { $inc: { pointsTotal: points } }, { new: true });
        if (rewardsProgram) {
            res.status(200).json(rewardsProgram);
        } else {
            res.status(404).json({ message: 'Rewards Program not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE /api/RewardsProgram/:customerId
router.delete('/:customerId', async (req, res) => {
    const { customerId } = req.params;
    try {
        await RewardsProgram.deleteOne({ customerId });
        res.status(200).json({ message: 'Rewards Program deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
