const { Router } = require("express");

const productManagementController = require("../controllers/productManagement");
const productManagementRouter = Router();

Router.get("/productManagement", productManagementController.generateReport);
// productManagementRouter.put("/order", productManagementController.updateOrderStatus);

module.exports = productManagementRouter;