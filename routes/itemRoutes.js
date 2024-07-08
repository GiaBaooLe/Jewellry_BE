const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// GET /api/Item
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST /api/Item
router.post('/', async (req, res) => {
    const itemData = req.body;
    try {
        const item = new Item(itemData);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /api/Item/:id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const item = await Item.findById(id);
        if (item) {
            res.status(200).json(item);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT /api/Item/:id
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
        const item = await Item.findByIdAndUpdate(id, updatedData, { new: true });
        if (item) {
            res.status(200).json(item);
        } else {
            res.status(404).json({ message: 'Item not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE /api/Item/:id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Item.findByIdAndDelete(id);
        res.status(200).json({ message: 'Item deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
