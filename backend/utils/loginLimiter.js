const rateLimit = require('express-rate-limit');

const loginLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 3,
    message: { status: 'fail', message: 'To many login attemps, please try again after 60 second pause' },
    handler: (req, res, next, options) => {
        res.status(options.statusCode).send(options.message)
    },
    standardHeaders: true,
    legacyHeaders: false
});

module.exports = loginLimiter;