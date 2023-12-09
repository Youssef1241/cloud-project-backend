const { Schema, model } = require('mongoose');

const ProductSchema = new Schema({
  name: {
    type: 'String',
    required: true
  },
  illness: {
    type: 'String',
    required: true
  },
  price: {
    type: 'Number',
    required: true
  },
  imgURL: {
    type: 'String'
  },
  quantity: {
    type: 'Number',
    required:true
  },
  supplierId: {
    type: Schema.Types.ObjectId,
    ref: 'supplier',
    required: true
  }
});

const ProductModel = model('product', ProductSchema);

module.exports = ProductModel;