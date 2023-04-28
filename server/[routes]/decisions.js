const express = require('express');
const router = express.Router();
const Decision = require('../models/decision');
const User = require('../models/user');
const { validateToken, authenticateUser } = require('../middleware/auth');
const { body, validationResult } = require('express-validator');
const user = require('../models/user');

router.post('/', [
    body("decision").exists,
    body("confidence").exists,
], validateToken, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    try {
        const user = await User.findById(req.user.id);
        const typeofdata ="Scenario"
        const decision = new Decision({
            name: user.name,
            decision: req.body.decision,
            confidence: req.body.confidence,
            date: Date.now(),
            type: typeofdata
        });
        decision.save().then((result) => {
            res.status(200).json({ message: 'Decision successfully saved.', decision: result });
        }).catch((err) => {
            res.status(500).json({ error: err.message });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', validateToken, async (req, res) => {
    try {
        const decisions = await Decision.find();
        return res.status(200).json({ decisions: decisions });
    } catch (err) {
        return res.status(500).json({ errors: [{ msg: err.message }] });
    }
}
);

router.delete('/decisions/:id', validateToken, async (req, res) => {
    try {
        const decision = await Decision.findByIdAndDelete(req.params.id);
        return res.status(200).json({ msg: 'Decision deleted successfully.', decision: decision });
    }
    catch (err) {
        return res.status(500).json({ errors: [{ msg: err.message }] });
    }
}
);

module.exports = router;