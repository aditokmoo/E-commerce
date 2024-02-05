const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Provide name for product'],
    },
    category: {
        type: String,
        required: [true, 'Provide category for product'],
        enum: [
            "smartphone",
            "computer",
            "watch",
            "camera",
            "headphones",
            "gaming"
        ]
    },
    model: {
        type: String,
        required: [true, 'Provide product model'],
        enum: [
            "Iphone 14 Pro Max",
            "Iphone 14 Pro",
            "Iphone 14",
            "Iphone 13 Pro Max",
            "Iphone 13 Pro",
            "Iphone 13",
            "Iphone 12 Pro Max",
            "Iphone 12 Pro",
            "Iphone 12",
            "Iphone 11 Pro Max",
            "Iphone 11 Pro",
            "Iphone 11",
        ]
    },
    type: {
        type: String,
        default: 'new',
        enum: [
            "new",
            "bestseller"
        ]
    },
    price: {
        type: Number,
        required: [true, 'Provide price for product']
    },
    discount: {
        type: Number,
        validate: {
            validator: function(value) {
                return value >= 0 && value <= 100;
            },
            message: 'Price discount must be between 0 and 100'
        }
    },
    discountPrice: {
        type: Number
    },
    color: {
        type: String,
        required: [true, 'Provide color for product'],
        enum: [
            "gold",
            "green",
            "purple",
            "black",
            "grey",
            "white"
        ]
    },
    desc: {
        type: String,
    },
    details: {
        type: String
    },
    images: {
        type: [],
        required: [true, "Provide image of product"]
    },
    reviews: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
    }
}, { timestamps: true });

module.exports = new mongoose.model('Product', productSchema)