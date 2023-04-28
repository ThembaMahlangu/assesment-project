const mongoose = require('mongoose');

const decisionSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    decision: {
        type: String,
        required: true
    },
    confidence: {
        type: Number,
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