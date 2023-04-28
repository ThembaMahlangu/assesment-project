const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

function authenticateUser(email, password) {
    return User.findOne({ email: email }).then(user => {
        if (!user) {
            const error = new Error('A user with this email could not be found.');
            error.statusCode = 401;
            throw error.message;
        }
        return bcrypt.compare(password, user.password).then(isEqual => {
            if (!isEqual) {
                const error = new Error('Wrong password!');
                error.statusCode = 401;
                throw error.message;
            }
            const token = jwt.sign(
                {
                    email: user.email,
                    userId: user._id.toString()
                },
                'bodysecret123',
                { expiresIn: '600h' }
            );
            return { token: token, userId: user._id.toString() };
        });
    });
}

function validateToken(req, res, next) {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error.message;
    }
    const token = authHeader.split(' ')[1];
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'bodysecret123');
    } catch (err) {
        err.statusCode = 500;
        throw err.message;
    }
    if (!decodedToken) {
        const error = new Error('Not authenticated.');
        error.statusCode = 401;
        throw error.message;
    }
    req.userId = decodedToken.userId;
    next();
}

module.exports = {
    authenticateUser: authenticateUser,
    validateToken: validateToken
};