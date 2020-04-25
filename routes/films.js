var express = require('express');
var router = express.Router();

const pageController = require('../controllers/filmController');

router.get('/', pageController.filmsList);
router.get('/id/:id', pageController.filmID);
router.get('/genre/:genre', pageController.filmByGenre);
router.get('/status/:status', pageController.filmByStatus);
router.get('/title/:title', pageController.filmByTitle);



module.exports = router;



/*
const router = require('express').Router();
const { Film } = require ('../models')

router.get('/', (req, res) => {
    Film.findAll()
    .then(films => res.send(films))
    .catch(err => {
        console.log(err)
        res.status(500).send({message:' ha habido un error, vete a tomar por saco y dejame en paz'})
    })
});

module.exports = router;
*/
