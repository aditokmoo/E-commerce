const jwt = require('jsonwebtoken');
const AppError = require('./AppError');

const verifyJWT = (req, res, next) => {
    // Get full token
    const authToken = req.headers.authorization || req.headers.Authorization;
    // Check if token starts with Barear
    if(!token.startsWith('Barear')) return next(new AppError('Unauthorized', 401));
    // Get token
    const token = authToken.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, decode) => {
        if(err) return next(new AppError('Forbbiden', 403));
        req.user = decode.UserInfo.username;
        req.role = decode.UserInfo.role;
        next()
    });
}

module.exports = verifyJWT;