const express = require('express');
const router = express.Router();
const Warranty = require('../models/Warranty');

// GET /api/Sales/Warranty
router.get('/Warranty', async (req, res) => {
    try {
        const warranties = await Warranty.find();
        res.status(200).json(warranties);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /api/Sales/Warranty/:customerId
router.get('/Warranty/:customerId', async (req, res) => {
    const { customerId } = req.params;
    try {
        const warranty = await Warranty.findOne({ customerId });
        if (warranty) {
            res.status(200).json(warranty);
        } else {
            res.status(404).json({ message: 'Warranty not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST /api/Sales/Warranty
router.post('/Warranty', async (req, res) => {
    const { customerId, expiryDate } = req.body;
    try {
        const warranty = new Warranty({ customerId, expiryDate });
        await warranty.save();
        res.status(201).json(warranty);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE /api/Sales/Warranty/:customerId
router.delete('/Warranty/:customerId', async (req, res) => {
    const { customerId } = req.params;
    try {
        await Warranty.deleteOne({ customerId });
        res.status(200).json({ message: 'Warranty deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
