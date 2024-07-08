const express = require('express');
const router = express.Router();
const ReturnPolicy = require('../models/ReturnPolicy');

// GET /api/ReturnPolicy
router.get('/', async (req, res) => {
  const policies = await ReturnPolicy.find();
  res.json(policies);
});

// POST /api/ReturnPolicy
router.post('/', async (req, res) => {
  const newPolicy = new ReturnPolicy(req.body);
  await newPolicy.save();
  res.status(201).json(newPolicy);
});

// GET /api/ReturnPolicy/:returnPolicyID
router.get('/:returnPolicyID', async (req, res) => {
  const policy = await ReturnPolicy.findById(req.params.returnPolicyID);
  res.json(policy);
});

// PUT /api/ReturnPolicy/:returnPolicyID
router.put('/:returnPolicyID', async (req, res) => {
  const updatedPolicy = await ReturnPolicy.findByIdAndUpdate(req.params.returnPolicyID, req.body, { new: true });
  res.json(updatedPolicy);
});

// DELETE /api/ReturnPolicy/:returnPolicyID
router.delete('/:returnPolicyID', async (req, res) => {
  await ReturnPolicy.findByIdAndDelete(req.params.returnPolicyID);
  res.status(204).end();
});

module.exports = router;
