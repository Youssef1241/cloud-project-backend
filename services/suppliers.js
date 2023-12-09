const SupplierModel = require('../models/Supplier');

module.exports.addNewSupplier = async (supplierInfo, supplierCoords) => {

  const supplier = new SupplierModel({
    name: supplierInfo.fname,
    email: supplierInfo.email,
    companyName: supplierInfo.companyName,
  });


  try {
    const addedSupplier = await supplier.save();
    return addedSupplier;

  } catch (error) {
    
    console.log(error);
    throw new Error('Could Not Add Supplier.');
    
  }
};

module.exports.findAllSuppliers = async () => {
  try {
    const suppliers = await SupplierModel.find();
    return suppliers;

  } catch (err) {
    throw new Error('Could Not Find Suppliers.');
  }
};