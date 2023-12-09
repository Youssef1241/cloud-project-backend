const { model, Schema } = require("mongoose");

const productManagementSchema = new Schema(
  {
    product: {
      type: Schema.Types.Object,
      ref: "order",
      required: true,
    },
    numOfOrder: {
      type: "Number",
      required: true,
    },
    numSoldProduct: {
      type: "Number",
      required: true,
    },
    highPurchaser: {
      type: "String",
      required: true,
    },
    productExpireDate: {
      type: Date,
      default: Date.now,
      required: true,
  },
    totalPurchases: {
      type: "Number",
      required: true,
    },
    LastTimeUpdated: {
      type: Date,
      default: Date.now
  },
  },
  { timestamps: true }
);

const ProductManagementModel = model("productManagement", productManagementSchema);

module.exports = ProductManagementModel;