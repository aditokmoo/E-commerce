const asyncHandler = require('express-async-handler');
const AppError = require('../utils/AppError');
const { v4: uuidv4 } = require('uuid');
const sharp = require('sharp');
const Product = require('../models/Product');

exports.createNewProduct = asyncHandler(async (req, res, next) => {
	const { name, category, price, discount, color, desc, model, details, reviews, categoryDetails } = req.body;
	// Check if image file dosn't and if isn't valid
	req.files.forEach(file => {
		if (!file || !file.mimetype.startsWith('image')) return next(new AppError('Provide valid image', 400));
	})
	// Check if name is unique
	const existingProducts = await Product.findOne({ model, color });
	if(existingProducts) return next(new AppError('Product already exist', 400))
	// Generate unique random image name
	const imagesName = req.files.map(() => uuidv4())
	// Check price so it dosnt be zero
	if (price === 0) return next(new AppError("Price can't be 0", 400));
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
		color,
		desc,
		details,
		model,
		images: imagesName.map((name) => `${name}.png`),
		reviews,
		categoryDetails
	});

	// Save each image in the public folder
    await Promise.all(req.files.map(async (file, index) => {
		await sharp(file.buffer)
			.resize({ width: 400, height: 400, fit: 'inside' })
			.png({ quality: 90, force: true })
			.toFile(`public/${imagesName[index]}.png`);
	}));

	// Send response
	res.status(200).json({ status: 'success', message: 'Product created successfully', product });
});

exports.getAllProducts = asyncHandler(async (req, res, next) => {
    let match = {};

    // Filter products by type and discount
    if (req.query.type || (req.query.discount && req.query.discount >= 50)) {
        match.$or = [];

		// Check if type exist
        if (req.query.type) {
            match.$or.push({ type: req.query.type });
        }

		// check if discount exist and if it's greater or equal to 50
        if (req.query.discount && req.query.discount >= 50) {
            match.$or.push({ discount: { $gte: 50 } });
        }
    }

    // Filter products by category
    if (req.query.category === 'smartphone' || req.query.category === 'computer') {
		match.category = req.query.category;
    }

    // Filter products by search
    if (req.query.search) {
        match.$or = [
            { model: new RegExp(req.query.search, "i") },
            { name: new RegExp(req.query.search, "i") },
        ];
    }

	// Find products by there match
    const products = await Product.find(match);

	// Sorting
	const sortBy = req.query.sortBy;
	if(sortBy) {
		switch(sortBy) {
			case 'lowest':
				products.sort((a,b) => a.discountPrice - b.discountPrice);
				break;
			case 'highest':
				products.sort((a,b) => a.discountPrice + b.discountPrice);
				break;
			default:
				products
				break;
		}
	}

	// Check if products exist
	if(products.length === 0) return next(new AppError("Product's not found", 400));

	// Send response
    res.status(200).json({ status: 'success', products: products });
});


exports.getSingleProduct = asyncHandler(async (req, res, next) => {
	// Get product id from params
	const { productId } = req.params;
	// Get single product
	const product = await Product.findById(productId);
	const sameProducts = await Product.find({ model: product.model })
	const products = sameProducts.map(product => ({color: product.color, id: product._id}));
	// Check if product dosnt exist
	if(!product) return next(new AppError('Product not found', 400))
	// Send response
	res.status(200).json({ status: 'success', products, product })
})