const productManagementService = require("../services/productManagement");
const ordersService = require("../services/orders");
const axios = require("axios");

module.exports.generateReport = async (req, res) => {
  try {
    const orders = await ProductService.getWeeksOrders();
    console.log(orders);
    report = {
      product: 0,
      numOfOrder: 0,
      numSoldProduct: 0,
      highPurchaser: "",
      productExpireDate: new Date(),
      totalPurchases: 0,
      LastTimeUpdated: new Date(),
      products: {},
    };
    let total = 0;
    let productObj = {};

    report.numOfOrders = orders.length;
    orders.forEach((order) => {
      if (total < order.totalPrice) {
        total = order.totalPrice;
        order.totalPrice;
        report.highestPurchaser = order.userId.username; // from the order schema,it should have userinfo
      }
      
      productObj[order.productId.name] = productObj[order.productId.name]
        ? [
          productObj[order.productId.name][0] + 1,
          productObj[order.productId.name][1] + order.totalPrice,
          ]
        : [1, order.totalPrice];
    });
    report.products = productObj;
    total = 0;

    for (pro in productObj) {

      if (total < productObj[pro][0]) {
        total = productObj[pro][0];
        report.numSoldProduct = pro;
      }
    }

    const addReport = await ProductService.addNewReport(report);

    return res.send({
      msg: "Report Added Successfully.",
      report: addReport,
    });
  } catch (err) {
    res.status(500);
    res.send({
      error: err.message,
    });
  }
};

// module.exports.updateOrderStatus = async (req, res) => {
//   try {
//     const order = await ordersService.editOrder(req);
//     return res.send({ order });

//   } catch (err) {
//     res.status(500);
//     return res.send({
//       error: err.message,
//     });
//   }
// };

