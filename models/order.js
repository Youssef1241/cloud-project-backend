const { Schema, model } = require('mongoose');

const orderschema = new Schema({
    orderstatus: {
        type: String, 
        enum: ['pending', 'processing', 'delivered'], // Use enum to restrict values
        required: true
    },
    products: {
        name: {
            type: String, // Use 'String' for name
            required: true
        },
        price: {
            type: Number, // Use 'Number' for price
            required: true
        }
    },
    patient: {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number, // Use 'Number' for age
            required: true
        },
        gender: {
            type: String,
            required: true
        }
    },
    price: {
        type: Number, // Use 'Number' for price
        required: true
    }
});

const ordermodel = model('order', orderschema);

module.exports = ordermodel;
