const express = require('express');
const router = express.Router();
const Discount = require('../models/Discount');

// GET /api/Discount
router.get('/', async (req, res) => {
  const discounts = await Discount.find();
  res.json(discounts);
});

// POST /api/Discount
router.post('/', async (req, res) => {
  const newDiscount = new Discount(req.body);
  await newDiscount.save();
  res.status(201).json(newDiscount);
});

// GET /api/Discount/:id
router.get('/:id', async (req, res) => {
  const discount = await Discount.findById(req.params.id);
  res.json(discount);
});

// DELETE /api/Discount/:id
router.delete('/:id', async (req, res) => {
  await Discount.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

// PUT /api/Discount/update/:id
router.put('/update/:id', async (req, res) => {
  const updatedDiscount = await Discount.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedDiscount);
});

// PUT /api/Discount/approve/:id
router.put('/approve/:id', async (req, res) => {
  const approvedDiscount = await Discount.findByIdAndUpdate(req.params.id, { isActive: true }, { new: true });
  res.json(approvedDiscount);
});

// PUT /api/Discount/request/:id
router.put('/request/:id', async (req, res) => {
  const requestedDiscount = await Discount.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
  res.json(requestedDiscount);
});

module.exports = router;
