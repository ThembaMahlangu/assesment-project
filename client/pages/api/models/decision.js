const mongoose = require('mongoose');

const decisionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.']
    },
    email: {
        type: String,
        required: [true, 'Email is required.']
    },
    phone: {
        type: String,
        required: [true, 'Phone is required.']
    },
    date: {
        type: Date,
        default: Date.now
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Decision', decisionSchema);