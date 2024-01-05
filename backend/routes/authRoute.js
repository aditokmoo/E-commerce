const express = require('express');
const { signup, verify, login, refresh, logout } = require('../controllers/authController');
const loginLimiter = require('../utils/loginLimiter');

const router = express.Router();

router.post('/signup', signup);
router.get('/verify/:confirmToken', verify);
router.post('/login', loginLimiter, login);
router.get('/refresh', refresh);
router.post('/logout', logout);

module.exports = router