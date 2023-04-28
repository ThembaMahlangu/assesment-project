const mongoose = require('mongoose');

const decisionSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    decision: {
        type: String,
        required: true
    },
    confidence: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Decision', decisionSchema);