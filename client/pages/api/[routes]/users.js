const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { validateToken, authenticateUser } = require('../middleware/auth');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

router.post('/register', [
    body('name').notEmpty().withMessage('Name is required.'),
    body('email').notEmpty().withMessage('Email is required.'),
    body('password').notEmpty().withMessage('Password is required.'),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    try {
        User.findOne({ email: req.body.email }).then(user => {
            if(user) {
                return res.status(422).json({ errors: [{ msg: 'User already exists.' }] });
            }
            else
            {
                const salt = bcrypt.genSaltSync(10);
                const HashedPassword = bcrypt.hashSync(req.body.password, salt);
                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    password: HashedPassword,
                    lastLogin: Date.now()
                });
                const user = new User(newUser);
                user.save().then(user => {
                    res.status(200).json({ message: 'User created successfully.', user: user});
                }).catch(err => {
                    res.status(500).json({ error: err.message });
                });
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    authenticateUser(email, password)
      .then(({ token, userId }) => {
        res.status(200).json({ message: "Successful login, login tracker active", token: token, userId: userId });
        // Update last login
        const user = User.findOne({ _id: userId }).then((user) => {
          user.lastLogin = new Date();
          user.save();
        });
        })
        .catch((err) => {
            res.status(401).json({ error: err.message });
        });
});

router.get("/", async (req, res) => {
    try {
      // Find all users in the database
      const users = await User.find();
      
      // Send the users as a response to the client
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports = router;