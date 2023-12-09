const ProductModel=require('../models/Product');
module.exports.findAllProducts=async (productName) => {
    try{
        let query={}
        if(productName!='all'){
            query={name:{$regex:`^${productName}`,$options:'i'}}
        }
        const products=await ProductModel.find(query);
        return products;
    } catch(err){
        throw new Error('Could not retreive products');
    }
    
};

module.exports.addNewProduct=async (productInfo) => {
    try{
        const product=new ProductModel({
            name:productInfo.name,
            description:productInfo.description,
            price:productInfo.price,
            imgURL:productInfo.imgURL,
            quantity:productInfo.quantity,
            supplierId:productInfo.supplierId
        });
        const createdProduct=await product.save();
        return createdProduct;

    } catch(err){
        throw new Error('Could not create product.')
    }
};
