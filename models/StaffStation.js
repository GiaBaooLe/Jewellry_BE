const mongoose = require('mongoose');

const StaffStationSchema = new mongoose.Schema({
    staffId: String,
    stationName: String
});

module.exports = mongoose.model('StaffStation', StaffStationSchema);
