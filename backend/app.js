const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/AppError');
const authRouter = require('./routes/authRoute');
const cors = require('cors');

// Middlewares
if(process.env.NODE_ENV === 'dev') {
    app.use(morgan('dev'))
}
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/auth', authRouter)

// Handle unhadled routes
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
})

// Global error handler
app.use(globalErrorHandler)

module.exports = app