const { check } = require('express-validator');

module.exports.validUserInfo = () => {
    const validationMiddlewares = [
        check('username').notEmpty().withMessage('Please fill out this field'),
        check('email').isEmail().withMessage('Email is invalid'),
        check('password').notEmpty().withMessage('Please fill out this field'),
        check('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters'),
        check('fname').notEmpty().withMessage('Please fill out this field'),
        check('lname').notEmpty().withMessage('Please fill out this field')
    ];
    return validationMiddlewares;
} 

module.exports.validUpdateUserInfo = () => {
    const validationMiddlewares = [
        check('username').notEmpty().withMessage('Please fill out this field'),
        check('fname').notEmpty().withMessage('Please fill out this field'),
        check('lname').notEmpty().withMessage('Please fill out this field'),
        check('email').isEmail().withMessage('Email is invalid'),
    ];
    return validationMiddlewares;
}

module.exports.validUpdatePassword = () => {
    const validationMiddlewares = [
        check('password').notEmpty().withMessage('Please fill out this field'),
        check('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
    ];
    return validationMiddlewares;
}

module.exports.validLogin = () => {
 
    const validationMiddlewares = [
        check('username').notEmpty().withMessage('Username is invalid.'),
        check('email').isEmail().withMessage('Email is invalid.'),
        check('username').notEmpty().withMessage('Username is invalid.'),
        check('password').notEmpty().withMessage('Password is invalid.'),
    ];
    return validationMiddlewares;
}