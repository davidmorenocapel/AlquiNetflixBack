const router = require('express').Router();
const filmsController = require('../controllers/filmsController.js');

router.get('/',filmsController.getAll);


module.exports = router;