const asyncHandler = require('express-async-handler');

// SIGN UP
exports.signup = asyncHandler(async (req, res, next) => {
    const { username, firstName, lastName, email, password, confirmPassword, phoneNumber, country, city, postalCode } = req.body;

    
});

// VERIFY ACCOUNT
exports.verify = asyncHandler(async (req, res, next) => {});

// LOGIN
exports.login = asyncHandler(async (req, res, next) => {});

// REFRESH
exports.refresh = asyncHandler(async (req, res, next) => {});

// LOGOUT
exports.logout = asyncHandler(async (req, res, next) => {});