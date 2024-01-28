const asyncHandler = require('express-async-handler');
const AppError = require('../utils/AppError');
const { v4: uuidv4 } = require('uuid');
const sharp = require('sharp');
const Product = require('../models/Product');

exports.createNewProduct = asyncHandler(async (req, res, next) => {
	const { name, category, price, discount, colors, desc, details, image, reviews } = req.body;
	// Check if image file dosn't and if isn't valid
	if (!req.file || !req.file.mimetype.startsWith('image')) return next(new AppError('Provide valid image', 400));
	// Generate unique random image name
	const imageName = uuidv4();
	// Check price so it dosnt be zero
	if (price === 0) return next(new AppError("Price can't be 0"));
	// Calculate price and discount to get new price
	const priceDiscount = price * discount / 100;
	const newPrice = price - priceDiscount;
	// Create Product
	const product = await Product.create({
		name,
		category,
		price,
		discount,
		discountPrice: newPrice,
		colors,
		desc,
		details,
		image: `${imageName}.png`,
		reviews
	});

	// Save image in public folder
	await sharp(req.file.buffer).resize(160, 160).png({ quality: 90, force: true }).toFile(`public/${imageName}.png`);

	// Send response
	res.status(200).json({ status: 'success', message: 'Product created successfully', product });
});

exports.getAllProducts = asyncHandler(async (req, res, next) => {
	// Get products
	const products = await Product.find().populate({
		path: 'reviews',
		populate: { path: 'user', select: 'username' }
	});
	// Check if products exist
	if (products.length === 0) return next(new AppError("No products found."));
	// Send response
	res.status(200).json({ status: 'success', products });
});
