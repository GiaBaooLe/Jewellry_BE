const express = require('express');
const router = express.Router();
const Collection = require('../models/Collection');

// GET /api/Collection
router.get('/', async (req, res) => {
  const collections = await Collection.find();
  res.json(collections);
});

// POST /api/Collection
router.post('/', async (req, res) => {
  const newCollection = new Collection(req.body);
  await newCollection.save();
  res.status(201).json(newCollection);
});

// GET /api/Collection/:id
router.get('/:id', async (req, res) => {
  const collection = await Collection.findById(req.params.id);
  res.json(collection);
});

// PUT /api/Collection/Collection/:id
router.put('/Collection/:id', async (req, res) => {
  const updatedCollection = await Collection.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedCollection);
});

// DELETE /api/Collection/Collection/:id
router.delete('/Collection/:id', async (req, res) => {
  await Collection.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
