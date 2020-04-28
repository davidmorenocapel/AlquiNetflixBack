var express = require('express');
var router = express.Router();

const orderController = require('../controllers/orderController');

router.get('/', orderController.orderList);
router.get('/orderByUserId/:id', orderController.orderByUserId);




module.exports = router;