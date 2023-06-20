const mongoose = require('mongoose');

const RoomBookingSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        ref: 'User'
    },
    date: {
        type: Date,
        required: [true, 'Provide Date'],
        index: { expires: '100d' },
    },
    time: {
        type: String,
        required: [true, 'Provide Time'],
    },
    rooms: {
        type: [String],
        required: [true, 'Please provide rooms'],
    },
    seats: {
        type: Number,
        required: [true, 'Please provide no of seats']
    }
});

module.exports = new mongoose.model('RoomBooking', RoomBookingSchema);