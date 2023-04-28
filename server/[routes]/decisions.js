const express = require('express');
const router = express.Router();
const Decision = require('../models/decision');
const User = require('../models/user');
const { validateToken, authenticateUser } = require('../middleware/auth');
const { body, validationResult } = require('express-validator');

router.post('/', [
    body('name').notEmpty().withMessage('Name is required.'),
    body('email').optional().isEmail(),
    body('phone').notEmpty().withMessage('Phone is required.'),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    try {
        const decision = new Decision({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            date: Date.now()
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