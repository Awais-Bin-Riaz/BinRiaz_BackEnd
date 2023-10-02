const express = require('express');
const { upload, requireSignin, adminMiddleWare } = require('../../common-middleware');
const { createPage, getPage } = require('../../controller/admin/page');
const router = express.Router();

router.post('/page/create',requireSignin,adminMiddleWare, upload.fields([
    {name:'banners'},
    {name:'products'}

]),createPage) ;

router.get('/page/:category/:type',getPage)

module.exports = router