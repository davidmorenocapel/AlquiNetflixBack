const {id, title, genre, image, status, createdAt, updatedAt, Sequelize, sequelize} = require('../models/index');
const { Op} = Sequelize;
const filmController = {
    getAll(req,res){
        film.findAll({
            include:[title, genre, image]
        })
        .then(films=>res.send(films))
    }
}
module.exports = filmsController;