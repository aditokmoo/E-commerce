const express = require('express');
const { getAllProducts, createNewProduct, getSingleProduct } = require('../controllers/productController');
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.route('/').get(getAllProducts).post(upload.array('images'), createNewProduct)
router.route('/:productId').get(getSingleProduct)

module.exports = router;