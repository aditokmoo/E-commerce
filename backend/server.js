require('dotenv').config();
const mongoose = require('mongoose');

// Handle uncaught exception
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    // Optionally, perform any cleanup or logging here
    process.exit(1); // Exit with an error code

});

const app = require('./app');
const PORT = process.env.PORT || 5000;
const DB = process.env.MONGO_DB_LINK.replace('<PASSWORD>', process.env.MONGO_DB_PASSWORD);

// Connect to DB
mongoose.connect(DB).then(() => console.log('Successfully connected to DB')).catch((err) => {
	console.log(err.message);
	process.exit(1);
});

// Handle unhandled rejection
process.on('unhandledRejection', (reason, promise) => {
	console.error('Unhandled Rejection at:', promise, 'reason:', reason);
	// Optionally, perform any cleanup or logging here
	process.exit(1); // Exit with an error code
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
