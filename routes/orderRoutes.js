const router = require('express').Router();
const { 
    getOrders,
    makeOrder
 } = require("../controller/orderController");

router.get('/orders', getOrders);
router.post('/order', makeOrder);

module.exports = router;
