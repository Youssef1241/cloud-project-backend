const ordermodel = require('../models/order');
var ObjectID = require('mongodb').ObjectId;





module.exports.retrieveordersByID = async (orderId) => {
    try{
        const orders = await ordermodel.find({_id: ObjectID(orderId)});
        return orders;
    }
    catch(err){
        throw new Error(`Couldn't find order`);
    } // this function allows us to retrieve order details including the stataus
}


module.exports.retreieveproductsquantity = async (productId) => {
    try{
        const products = await productmodel.find({_id: ObjectID(productId)});
        return products;
    }
    catch(err){
        throw new Error(`Couldn't find product`);
    } // this function allows us to retrieve product details including quantity
}



module.exports.cancelorder = async (orderId) => {
    try{
        await ordermodel.deleteOne({_id: ObjectID(orderId)});
    }
    catch(err){
        throw new Error(`Couldn't cancel order`);
    }
}



