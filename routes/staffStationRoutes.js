const express = require('express');
const router = express.Router();
const StaffStation = require('../models/StaffStation');

// GET /api/StaffStation
router.get('/', async (req, res) => {
    try {
        const staffStations = await StaffStation.find();
        res.status(200).json(staffStations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST /api/StaffStation
router.post('/', async (req, res) => {
    const { staffId, stationName } = req.body;
    try {
        const staffStation = new StaffStation({ staffId, stationName });
        await staffStation.save();
        res.status(201).json(staffStation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT /api/StaffStation/:id
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { staffId, stationName } = req.body;
    try {
        const staffStation = await StaffStation.findByIdAndUpdate(id, { staffId, stationName }, { new: true });
        if (staffStation) {
            res.status(200).json(staffStation);
        } else {
            res.status(404).json({ message: 'StaffStation not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE /api/StaffStation/:id
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await StaffStation.findByIdAndDelete(id);
        res.status(200).json({ message: 'StaffStation deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
