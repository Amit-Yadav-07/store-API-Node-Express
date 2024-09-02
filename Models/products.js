const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        require: [true, 'product name must be provided']
    },
    price: {
        type: Number,
        require: [true, 'product number must be provided']
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['ikea', 'liddy', 'marcos', 'caressa'],
            massage: '{VALUE is not supported}'
        }
        //   enum:['ikea','liddy','marcos','caressa']

    }
});

module.exports = mongoose.model('product', productSchema);


