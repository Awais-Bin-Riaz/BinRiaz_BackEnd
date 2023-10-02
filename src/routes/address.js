// const express = require('express');
// const { requireSignin, userMiddleware } = require('../common-middleware');
// const { addAddress, getAddress } = require('../controller/address');
// const router = express.Router();


// router.post('/user/address/create', function(req,res) {requireSignin, userMiddleware, addAddress});
// router.post('/user/getaddress',function(req,res) { requireSignin, userMiddleware, getAddress});

// module.exports = router;



const express = require("express");
const { requireSignin, userMiddleWare } = require("../common-middleware");
const { addAddress, getAddress } = require("../controller/address");
const router = express.Router();


router.post("/user/address/create", requireSignin,userMiddleWare, addAddress);
router.post("/user/getaddress", requireSignin, userMiddleWare, getAddress);

module.exports = router;



// , ,