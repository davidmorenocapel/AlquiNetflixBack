var express = require('express');
var router = express.Router();

const ordersController = require('../controllers/orderController');

router.get('/', ordersController.orderList);



module.exports = router;