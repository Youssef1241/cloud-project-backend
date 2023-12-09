const { Router }=require('express');
const productController = require('../controllers/products');
const authMiddlewares = require('../middleware/authorization');


const productsRouter = Router();

productsRouter.get('/', productController.getProducts);
productsRouter.get('/:productId', productController.getProduct);
productsRouter.post('/', authMiddlewares.auth, productController.postProduct);
productsRouter.delete('/:productId', productController.deleteProduct);

module.exports = productsRouter;