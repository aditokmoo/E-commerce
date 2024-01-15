const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail');
const AppError = require('../utils/AppError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

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
exports.login = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;
    // Check if email and password exist
    if(!email || !password) return next(new AppError('All fields are required', 400));
    // Find user
    const user = await User.findOne({ email }).exec();
    // Check if that user exist
    if(!user) return next(new AppError('Unauthorized', 401));
    // Check if user is verified
    if(!user.confirmed) return next(new AppError('You need to verify first. Verification link is on your email'));
    // Match passwords
    const match = await bcrypt.compare(password, user.password);
    // Check if dosnt match
    if(!match) return next(new AppError("Password dosn't match", 401));
    // Create access token
    const accessToken = jwt.sign(
        {
            UserInfo: {
                username: user.username,
                role: user.role
            }
        },
        process.env.ACCESS_TOKEN,
        { expiresIn: '10s' }
    )
    // Create refresh token
    const refreshToken = jwt.sign(
        { username: user.username },
        process.env.REFRESH_TOKEN,
        { expiresIn: '20s' }
    )
    // Create secure cookie with refresh token
    res.cookie('jwt', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        maxAge: 7 * 24 * 60 * 60 * 1000
    });
    // Send response
    res.status(200).json({ role: user.role, accessToken })
});

// REFRESH
exports.refresh = asyncHandler(async (req, res, next) => {
    const cookies = req.cookies;
    // Check if cookies jwt exist
    if(!cookies?.jwt) return next(new AppError('Unauthorized', 401));

    const refreshToken = cookies.jwt;

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN, asyncHandler(async (err, decode) => {
        if(err) return next(new AppError('Forbbiden', 403));
        // Find user
        const user = await User.findOne({ username: decode.username });
        // Check if user exist
        if(!user) return next(new AppError('Unauthorized', 401));
        // Create access token
        const accessToken = jwt.sign(
            {
                UserInfo: {
                    username: user.username,
                    role: user.role
                }
            },
            process.env.ACCESS_TOKEN,
            { expiresIn: '20s' }
        );
        // Send response
        res.status(200).json({ role: user.role, accessToken })
    }))
});

// GET USER
exports.getUser = asyncHandler(async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    console.log(token)
    // Check if token exist
    if (!token) return next(new AppError('Unauthorized', 401));
    // Verify token
    await jwt.verify(token, process.env.ACCESS_TOKEN, async (err, decode) => {
        if(err) return next(new AppError('Invalid token, login again', 403));
        // Get user
        const user = await User.findOne({ username: decode.UserInfo.username }).select('-password');
        // Check if user exist
        if (!user) return next(new AppError('User does no longer exist. Please register', 401));
        // Send response
        res.status(200).json(user)
    })
})

// LOGOUT
exports.logout = asyncHandler(async (req, res, next) => {
    const cookies = req.cookies;
    // Check if cookies jwt dosnt exist
    if(!cookies?.jwt) return res.sendStatus(204);
    // Clear cookie
    res.clearCookie('jwt', {
        httpOnly: true,
        sameSite: 'None',
        secure: true,
    });
    // Send response
    res.status(200).json({ status: 'success', message: 'Cookie cleared' })
});