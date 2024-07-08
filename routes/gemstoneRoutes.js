const express = require('express');
const router = express.Router();
const Gemstone = require('../models/Gemstone');

// GET /api/Gemstone
router.get('/', async (req, res) => {
  const gemstones = await Gemstone.find();
  res.json(gemstones);
});

// POST /api/Gemstone
router.post('/', async (req, res) => {
  const newGemstone = new Gemstone(req.body);
  await newGemstone.save();
  res.status(201).json(newGemstone);
});

// GET /api/Gemstone/:id
router.get('/:id', async (req, res) => {
  const gemstone = await Gemstone.findById(req.params.id);
  res.json(gemstone);
});

// PUT /api/Gemstone/Gemstone/:id
router.put('/Gemstone/:id', async (req, res) => {
  const updatedGemstone = await Gemstone.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedGemstone);
});

// DELETE /api/Gemstone/Gemstone/:id
router.delete('/Gemstone/:id', async (req, res) => {
  await Gemstone.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
