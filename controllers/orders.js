const ordersService = require('../services/orders');
const productService = require('../services/products');
var ObjectID = require('mongodb').ObjectId;



module.exports.cancelorder = async (req, res) => {
    const orderId = req.body._id;
    try {
      await ordersService.cancelorder(orderId);
      return res.send({
        msg: 'order deleted successfully.'
      });
    } catch (err) {
      return res.status(500).send({
        error: err.message
      });
    }
  };


  module.exports.getorderbyid = async (req,res) => {
    const orderId = req.body._id;
    try {
      const order = await ordersService.retrieveordersByID(orderId);
      if (!order) {
        return res.status(404).send({
          error: 'order not found.'
        });
      }
      return res.send({
        order: order
      });
    } catch (err) {
      res.status(500).send({
        error: err.message
      });
    }



  
};

module.exports.retrieveQuantity = async (req, res) => {
    const productId = req.body._id; 
  
    try {
      const product = await productService.findProductById(productId);
  
      if (!product) {
        return res.status(404).send({
          error: 'Product not found.'
        });
      }
  
      return res.send({
        name: product.name,
        quantity: product.quantity
      });
  
    } catch (err) {
      return res.status(500).send({
        error: err.message
      });
    }
  };
  
