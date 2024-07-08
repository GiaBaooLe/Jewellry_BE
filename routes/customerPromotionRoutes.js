const express = require('express');
const router = express.Router();
const CustomerPromotion = require('../models/CustomerPromotion');

// GET /api/CustomerPromotion
router.get('/', async (req, res) => {
  const promotions = await CustomerPromotion.find().populate('customerId');
  res.json(promotions);
});

// POST /api/CustomerPromotion
router.post('/', async (req, res) => {
  const newPromotion = new CustomerPromotion(req.body);
  await newPromotion.save();
  res.status(201).json(newPromotion);
});

// PUT /api/CustomerPromotion/update/:id
router.put('/update/:id', async (req, res) => {
  const updatedPromotion = await CustomerPromotion.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedPromotion);
});

// DELETE /api/CustomerPromotion/:id
router.delete('/:id', async (req, res) => {
  await CustomerPromotion.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

// PUT /api/CustomerPromotion/approve/:id
router.put('/approve/:id', async (req, res) => {
  const approvedPromotion = await CustomerPromotion.findByIdAndUpdate(req.params.id, { status: 'approved' }, { new: true });
  res.json(approvedPromotion);
});

module.exports = router;
