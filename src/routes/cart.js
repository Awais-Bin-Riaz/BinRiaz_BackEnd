const express = require('express');
const router = express.Router();

const { addItemToCart,getCartItems, removeCartItems, } = require('../controller/cart');
const { requireSignin, userMiddleWare } = require('../common-middleware');

router.post('/user/cart/addtocart', requireSignin, userMiddleWare, addItemToCart)
router.post('/user/getCartItems', requireSignin, userMiddleWare, getCartItems)
router.post('/user/cart/removeItem', requireSignin, userMiddleWare, removeCartItems)


module.exports = router