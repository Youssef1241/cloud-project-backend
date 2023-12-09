const { check } = require('express-validator');

module.exports.valdiatePostSupplier = () => {
  const validationMiddlewares = [
    check('name').notEmpty().withMessage('Please fill out this field'),
    check('email').isEmail().withMessage('email is invalid.'),
    check('address').notEmpty().withMessage('Suppler address cannot be empty.')
  ];
  return validationMiddlewares;
};