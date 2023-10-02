const express = require('express');
const { requireSignin, adminMiddleWare } = require('../../common-middleware');
const {initialData } = require('../../controller/admin/initialData');
const router = express.Router();

  
router.post('/initialdata',requireSignin,adminMiddleWare,initialData)

module.exports = router