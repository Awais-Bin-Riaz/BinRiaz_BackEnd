const { requireSignin, userMiddleWare } = require("../common-middleware");
const { addOrder, getOrders, getOrder } = require("../controller/order");
const router = require("express").Router();

router.post("/addOrder", requireSignin, userMiddleWare, addOrder);
router.get("/getOrders", requireSignin, userMiddleWare, getOrders);
router.post("/getOrder", requireSignin, userMiddleWare, getOrder);

module.exports = router;