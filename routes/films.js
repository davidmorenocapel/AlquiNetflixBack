const router = require('express').Router();
const { film } = require ('../models/film.js')

router.get('/', (req, res) => {
    film.findAll()
    .then(films => res.send(films))
    .catch(err => {
        console.log(err)
        res.status(500).send({message:' ha habido un error, vete a tomar por saco y dejame en paz'})
    })
});

module.exports = router;