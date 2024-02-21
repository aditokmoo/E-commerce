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

exports.getFilterdProducts = asyncHandler(async (query) => {
	let match = {};

	const queryObj = { ...query };
	const excludedFields = ['sort', 'page', 'limit', 'discount', 'type'];
	excludedFields.forEach((field) => delete queryObj[field])

	if(
		query.discount === undefined ||
		query.discount === 'null' ||
		query.type === undefined ||
		query.type === 'null' ||
		query.category === undefined ||
		query.category === 'null' ||
		query.search === undefined ||
		query.search === 'null'
	) {
		match;
	}

	// Return products by type and discount
	if (query.type || (query.discount && query.discount >= 50)) {	
		match = {};

		if (query.type) {
			match.$or = [{ type: query.type }];
		}
	
		if (query.discount >= 50) {
			match.$or = match.$or || [];
			match.$or.push({ discount: { $gte: 50 } });
		}
	}

	// Return products by category
	if(queryObj.category === 'smartphone' || queryObj.category === 'computer' ) {
		match = {};
		match.category = queryObj.category
	}

	// Return products by search
	if(queryObj.search) {
		match = {};
		match = {
			$or: [
			  { model: new RegExp(queryObj.search, "i") },
			  { name: new RegExp(queryObj.search, "i") },
			],
		  };
	}

	console.log(match)

	const filteredProducts = await Product.find(match)

	return filteredProducts
})

exports.getAllProducts = asyncHandler(async (req, res, next) => {	
	const products = await this.getFilterdProducts(req.query)

	return res.status(200).json({ status: 'success', products })
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