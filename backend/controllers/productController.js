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
	// Get category and type
	const productCategory = req.query.category;
	const productType = req.query.type;
	// Check if product category exist
	if(productCategory) {
		// Get products
		const products = await Product.find({ category: productCategory });
		// Check if products exist
		if (products.length === 0) return next(new AppError("No products found for specified category."));
		// Send response
		return res.status(200).json({ status: 'success', products })
	}

	// Check if product type exist
	if(productType) {
		// Get products
		const products = await Product.find({ type: productType });
		// Check if product exist
		if(products.length === 0) return next(new AppError("No products found for specified type"));
		// Send response
		return res.status(200).json({ status: 'success', products })
	}

	// Get all products
	const allProducts = await Product.find();
	// Check if all products dosn't exist
	if(allProducts.length === 0) return next(new AppError('No products found'))
	// Send response
	res.status(200).json({ status: 'success', products: allProducts })
});


exports.getSingleProduct = asyncHandler(async (req, res, next) => {
	// Get product id from params
	const { productId } = req.params;
	// Get single product
	const product = await Product.findById(productId);
	// Check if product dosnt exist
	if(!product) return next(new AppError('Product not found', 400))
	// Send response
	res.status(200).json({ status: 'success', product })
})