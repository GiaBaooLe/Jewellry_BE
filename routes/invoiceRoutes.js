const express = require('express');
const router = express.Router();
const Invoice = require('../models/Invoice');

// GET /api/Sales/Invoices
router.get('/Invoices', async (req, res) => {
    try {
        const invoices = await Invoice.find();
        res.status(200).json(invoices);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST /api/Sales/CreateInvoiceWithItems
router.post('/CreateInvoiceWithItems', async (req, res) => {
    const { invoiceDTO, items } = req.body;
    try {
        const invoice = new Invoice(invoiceDTO);
        await invoice.save();
        res.status(200).json(invoice);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /api/Sales/InvoiceItems/:invoiceID
router.get('/InvoiceItems/:invoiceID', async (req, res) => {
    const { invoiceID } = req.params;
    try {
        const invoice = await Invoice.findById(invoiceID);
        if (invoice) {
            res.status(200).json(invoice);
        } else {
            res.status(404).json({ message: 'Invoice not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /api/Sales/CustomerInvoice/:customerID
router.get('/CustomerInvoice/:customerID', async (req, res) => {
    const { customerID } = req.params;
    try {
        const invoices = await Invoice.find({ customerId: customerID });
        res.status(200).json(invoices);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /api/Sales/Invoice/ByNumber/:invoiceNumber
router.get('/Invoice/ByNumber/:invoiceNumber', async (req, res) => {
    const { invoiceNumber } = req.params;
    try {
        const invoice = await Invoice.findOne({ invoiceNumber });
        if (invoice) {
            res.status(200).json(invoice);
        } else {
            res.status(404).json({ message: 'Invoice not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /api/Sales/Invoice/:id
router.get('/Invoice/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const invoice = await Invoice.findById(id);
        if (invoice) {
            res.status(200).json(invoice);
        } else {
            res.status(404).json({ message: 'Invoice not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
