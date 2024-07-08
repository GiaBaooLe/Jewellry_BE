const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

// GET /api/Customer
router.get('/', async (req, res) => {
  const customers = await Customer.find();
  res.json(customers);
});

// POST /api/Customer
router.post('/', async (req, res) => {
  const newCustomer = new Customer(req.body);
  await newCustomer.save();
  res.status(201).json(newCustomer);
});

// GET /api/Customer/:id
router.get('/:id', async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  res.json(customer);
});

// PUT /api/Customer/:id
router.put('/:id', async (req, res) => {
  const updatedCustomer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedCustomer);
});

// GET /api/Customer/email/:email
router.get('/email/:email', async (req, res) => {
  const customer = await Customer.findOne({ email: req.params.email });
  res.json(customer);
});

// GET /api/Customer/phone/:phone
router.get('/phone/:phone', async (req, res) => {
  const customer = await Customer.findOne({ phone: req.params.phone });
  res.json(customer);
});

module.exports = router;
