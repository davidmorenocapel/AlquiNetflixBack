var express = require('express');
var router = express.Router();

const pageController = require('../controllers/filmController');

router.get('/', pageController.filmsList);
router.get('/id/:id', pageController.filmID);
router.get('/genre/:genre', pageController.filmByGenre);
router.get('/status/:status', pageController.filmByStatus);
router.get('/title/:title', pageController.filmByTitle);

module.exports = router;