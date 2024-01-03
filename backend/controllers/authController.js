const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail');
const AppError = require('../utils/AppError');

// SIGN UP
exports.signup = asyncHandler(async (req, res, next) => {
    const { username, firstName, lastName, email, password, confirmPassword, phoneNumber, country, city, postalCode } = req.body;
    // Find user with same credentials
    const user = await User.findOne({ email });
    // If that user is found send error
    if(user) return next(new AppError('User already exist', 400));
    // Create confirm token
    const confirmToken = crypto.randomBytes(12).toString('hex');
    // Hash confirm token
    const hashConfirmToken = crypto.createHash("sha256").update(confirmToken).digest('hex');
    // Create new user
    const new_user = await User.create({ username, firstName, lastName, email, password, confirmPassword, phoneNumber, country, city, postalCode, confirmToken: hashConfirmToken });
    // Send confirmation mail
    await sendEmail(new_user, confirmToken);
    // Send response that user is created
    res.status(201).json({
        status: 'success',
        message: 'Signed successfully',
        user: new_user
    })
});

// VERIFY ACCOUNT
exports.verify = asyncHandler(async (req, res, next) => {
    const { confirmToken } = req.params;
    // Check if confirm token exist
    if(!confirmToken) return next(new AppError('Invalid token', 401));
    // Hash confirm token
    const hashConfirmToken = crypto.createHash("sha256").update(confirmToken).digest("hex");
    // Find user
    const user = await User.findOne({
        confirmToken: hashConfirmToken,
        confirmed: false
    });
    // Check if that user exist
    if(!user) return next(new AppError('Invalid token', 401));
    // verify user data
    user.confirmed = true;
    user.confirmToken = undefined;
    // Save user
    await user.save({ validateBeforeSave: false });
    // Send response
    return res.status(200).json({ status: 'success', message: `${user.username} account has been verified` })
});

// LOGIN
exports.login = asyncHandler(async (req, res, next) => {});

// REFRESH
exports.refresh = asyncHandler(async (req, res, next) => {});

// LOGOUT
exports.logout = asyncHandler(async (req, res, next) => {});