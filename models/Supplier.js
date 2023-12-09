const { model, Schema } = require('mongoose');

const SupplierSchema = new Schema({
  name: {
    type: 'String',
    required: true
  },
  email: {
    type: 'String',
    required: true
  },
 companyName: {
    type: 'String',
    required: true
 }
});

const SupplierModel = model('supplier', SupplierSchema);

module.exports = SupplierModel;