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
    colors: {
        type: [String],
        required: [true, 'Provide colors for product'],
        enum: [
            "yellow",
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
    image: {
        type: String,
        required: [true, "Provide image of product"]
    },
    reviews: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
    },
}, { timestamps: true });

module.exports = new mongoose.model('Product', productSchema)