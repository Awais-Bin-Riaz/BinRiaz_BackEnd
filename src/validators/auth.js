const {check} = require('express-validator');
const {validationResult}= require('express-validator')


exports.validateSignupRequest=[
    check('firstName')
    .notEmpty()
    .withMessage('First Name is required'),
    check('lastName')
    .notEmpty()
    .withMessage('Last Name is required'),
    check('email')
    .isEmail()
    .withMessage('Valid Email is required'),
    check('password')
    .isLength({min:6})
    .withMessage('Min 6 characters password is required')
];



exports.validateSigninRequest=[
    
    check('email')
    .isEmail()
    .withMessage('Valid Email is required'),
    check('password')
    .isLength({min:6})
    .withMessage('Min 6 characters password is required')
];




exports.isRequestValidated=(req,res,next)=>{

const errors= validationResult(req)
if (errors.array().length>0){
    return res.status(400).json({error:errors.array()[0].msg})
}
next();
}

