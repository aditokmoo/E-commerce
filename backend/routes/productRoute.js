const express = require('express');
const { getAllProducts, createNewProduct } = require('../controllers/productController');
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.route('/').get(getAllProducts).post(upload.single('image'), createNewProduct)

module.exports = router;