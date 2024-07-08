const express = require('express');
const router = express.Router();
const ItemImage = require('../models/ItemImage');

// GET /api/ItemImage
router.get('/', async (req, res) => {
  const itemImages = await ItemImage.find();
  res.json(itemImages);
});

// POST /api/ItemImage
router.post('/', async (req, res) => {
  const newItemImage = new ItemImage(req.body);
  await newItemImage.save();
  res.status(201).json(newItemImage);
});

// GET /api/ItemImage/:id
router.get('/:id', async (req, res) => {
  const itemImage = await ItemImage.findById(req.params.id);
  res.json(itemImage);
});

// GET /api/ItemImage/ItemImages/:itemID
router.get('/ItemImages/:itemID', async (req, res) => {
  const { itemID } = req.params;
  const { count } = req.query;
  const images = await ItemImage.find({ itemId: itemID }).limit(parseInt(count));
  res.json(images);
});

// POST /api/ItemImage/upload
router.post('/upload', (req, res) => {
  // Middleware xử lý file upload, ví dụ: multer
  // Code để lưu trữ file và thêm thông tin vào database
  res.status(200).json({ message: 'File uploaded successfully' });
});

// PUT /api/ItemImage/ItemImages/:id
router.put('/ItemImages/:id', async (req, res) => {
  const updatedItemImage = await ItemImage.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedItemImage);
});

// DELETE /api/ItemImage/ItemImages/:id
router.delete('/ItemImages/:id', async (req, res) => {
  await ItemImage.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
