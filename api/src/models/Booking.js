const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        rel: 'User'
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        rel: 'Spot'
    }
});

module.exports = mongoose.model('Booking', BookingSchema);