const { Router }= require('express');

const ordersController = require('c:/Cloud/pharmacy 185564/controller/products');

const bookingsRouter = Router();

ordersRouter.get('/', ordersController.getorderbyid);
ordersRouter.get('/:bookingID', ordersController.retrieveQuantity);

ordersRouter.delete('/:bookingID', ordersController.deleteBooking);


module.exports = ordersRouter;