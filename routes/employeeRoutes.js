const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Employee = require('../models/Employee');

// GET /api/Employee/Staff
router.get('/Staff', async (req, res) => {
  try {
    const staff = await Employee.find({ role: 'staff' });
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /api/Employee/Staff/:id
router.get('/Staff/:id', async (req, res) => {
  try {
    const staff = await Employee.findById(req.params.id);
    if (!staff) return res.status(404).json({ message: 'Employee not found' });
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT /api/Employee/Staff/:id
router.put('/Staff/:id', async (req, res) => {
  try {
    const updatedStaff = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedStaff) return res.status(404).json({ message: 'Employee not found' });
    res.json(updatedStaff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE /api/Employee/Staff/:id
router.delete('/Staff/:id', async (req, res) => {
  try {
    const staff = await Employee.findByIdAndDelete(req.params.id);
    if (!staff) return res.status(404).json({ message: 'Employee not found' });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST /api/Employee/Login
router.post('/Login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const employee = await Employee.findOne({ email });

    if (!employee) {
      console.log(`Login failed: No employee found with username ${username}`);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, employee.password);

    if (!isPasswordValid) {
      console.log(`Login failed: Incorrect password for username ${username}`);
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    console.log(`Login successful for username ${username}`);
    res.status(200).json({ message: 'Login successful' });

  } catch (error) {
    console.error(`Login error: ${error.message}`);
    res.status(500).json({ message: error.message });
  }
});
// POST /api/Employee/HashPassword
router.post('/HashPassword', async (req, res) => {
  try {
    const { password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    res.json({ hashedPassword });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST /api/Employee/Register
router.post('/Register', async (req, res) => {
  try {
    const { password, ...rest } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newEmployee = new Employee({ ...rest, password: hashedPassword });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT /api/Employee/DisableAccount/:id
router.put('/DisableAccount/:id', async (req, res) => {
  try {
    const disabledEmployee = await Employee.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
    if (!disabledEmployee) return res.status(404).json({ message: 'Employee not found' });
    res.json(disabledEmployee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
