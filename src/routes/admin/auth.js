const express = require('express');
const { requireSignin } = require('../../common-middleware');
const router = express.Router();
const { signup, signin, signout } = require('../../controller/admin/auth');
const { validateSignupRequest, isRequestValidated, validateSigninRequest } = require('../../validators/auth');


router.post('/admin/signup',validateSignupRequest,isRequestValidated, signup)
router.post('/admin/signin',validateSigninRequest,isRequestValidated, signin)
router.post('/admin/signout',signout)


// router.post('/profile', requireSignin, (req, res) => {
//     res.status(200).json({ user: 'profile' })
// })



module.exports = router