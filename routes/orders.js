var express = require('express');
var router = express.Router();

const ordersController = require('../controllers/orderController');

router.get('/', ordersController.orderList);
router.get('/orderByUserId/:id', ordersController.orderByUserId);




module.exports = router;