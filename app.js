const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
// Kết nối MongoDB
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/jewellry_BE', {

}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});
// Sử dụng các định tuyến API
app.use('/api/Collection', require('./routes/collectionRoutes'));
app.use('/api/Customer', require('./routes/customerRoutes'));
app.use('/api/CustomerPromotion', require('./routes/customerPromotionRoutes'));
app.use('/api/Discount', require('./routes/discountRoutes'));
app.use('/api/Employee', require('./routes/employeeRoutes'));
app.use('/api/Gemstone', require('./routes/gemstoneRoutes'));
app.use('/api/Item', require('./routes/itemRoutes'));
app.use('/api/ItemImage', require('./routes/itemImageRoutes'));
app.use('/api/ReturnPolicy', require('./routes/returnPolicyRoutes'));
app.use('/api/RewardsProgram', require('./routes/rewardsProgramRoutes'));
app.use('/api/Sales', require('./routes/invoiceRoutes'));
app.use('/api/Sales', require('./routes/warrantyRoutes'));
app.use('/api/StaffStation', require('./routes/staffStationRoutes'));
// Cấu hình cổng

module.exports = app;