const router = require('express').Router();
const { Film } = require ('../models/index')

router.get('/', (req, res) => {
    Film.findAll()
    .then(films => res.send(films))
    .catch(err => {
        console.log(err)
        res.status(500).send({message:' ha habido un error, vete a tomar por saco y dejame en paz'})
    })
});

module.exports = router;