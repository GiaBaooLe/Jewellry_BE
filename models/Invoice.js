const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
    staffId: String,
    invoiceNumber: String,
    customerId: String,
    companyName: String,
    buyerAddress: String,
    status: String,
    paymentType: String,
    quantity: Number,
    subTotal: Number,
    createdDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Invoice', InvoiceSchema);
