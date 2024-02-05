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
        await sharp(file.buffer).resize(600, 600, { fit: 'inside' }).png({ quality: 90, force: true }).toFile(`public/${imagesName[index]}.png`);
    }));

	// Send response
	res.status(200).json({ status: 'success', message: 'Product created successfully', product });
});

exports.getAllProducts = asyncHandler(async (req, res, next) => {
	// Get category and type
	const productCategory = req.query.category;
	const productType = req.query.type;
	const productDiscount = req.query.discount
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
	if (productType || productDiscount >= 50) {
		const query = {};
	
		if (productType) {
			query.$or = [{ type: productType }];
		}
	
		if (productDiscount >= 50) {
			query.$or = query.$or || [];
			query.$or.push({ discount: { $gte: 50 } });
		}
	
		// Get products based on query
		const products = await Product.find(query);
	
		// Check if products exist
		if (products.length === 0) {
			// No products found, send an error response
			return next(new AppError("No products found for specified criteria"));
		}
	
		// Send success response with the found products
		return res.status(200).json({ status: 'success', products });
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
	const sameProducts = await Product.find({ model: product.model })
	const products = sameProducts.map(product => ({color: product.color, id: product._id}));
	// Check if product dosnt exist
	if(!product) return next(new AppError('Product not found', 400))
	// Send response
	res.status(200).json({ status: 'success', products, product })
})