const mongoose = require('mongoose');
const productSchmema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    }, 
    parentCate: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        required: true,
    },

    quantity:{
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    offer: {
        type: String,
        required: true
    },
    productPictures: [
        { img: { type: String } }
    ],
    reviews: [
        {
            userId: {type:mongoose.Schema.Types.ObjectId, ref: 'User'},
            review: String
        }
    ],
    category: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Category',
        required: true,

    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',  
        required: true,

    },
    updatedAt: Date


}, { timestamps: true })
module.exports = mongoose.model('Product', productSchmema)