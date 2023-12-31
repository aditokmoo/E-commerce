const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: [true, 'Please provide username'],
        minLength: [2, 'Username must contain at least 2 characters'],
        maxLenght: [15, 'Username cant be heigher then 15 characters']
    },
    firstName: {
        type: String,
        required: [true, 'Please provide first name'],
        minLength: [3, 'First name must contain at least 3 characters'],
        maxLength: [15, 'First name cant be heigher then 15 characters']
    },
    lastName: {
        type: String,
        required: [true, 'Please provide last name'],
        minLength: [3, 'Last name must contain at least 3 characters'],
        maxLength: [15, 'Last name cant be heigher then 15 characters']
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Please provide a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please provide a password'],
        minLength: [6, 'Password cant be less then 6 characters'],
        maxLength: [25, 'Password cant be higher then 25 characters'],
    },
    confirmPassword: {
        type: String,
        required: [true, 'Please provide valid password'],
        validate: {
            validator: function(val) {
                return this.password === val;
            }   
        }
    },
    phoneNumber: {
        type: String,
        required: [true, 'Please provide phone number'],
    },
    country: {
        type: String,
        required: [true, 'Please provide country'],
    },
    city: {
        type: String,
        required: [true, 'Please provide city']
    },
    postalCode: {
        type: String,
        required: [true, 'Please provide postal code'],
        validate: {
            validator: function() {
                return isPostalCode(this.postalCode, 'any')
            },
            message: 'Please provide valid postal code'
        }
    }
});

module.exports = mongoose.model('User', userSchema);