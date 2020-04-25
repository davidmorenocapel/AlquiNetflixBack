
const { Film } = require('../models/index');
const db = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;



const pageController = {
    async filmsList(req,res){
        const films = await Film.findAll({
        });
        res.send(films);
    },
    async filmID(req,res){
        try{
        let id = req.params.id;
        console.log(id);
        const film = await Film.findOne({
            where: {
                id: id
            }
        })
        res.send(film)
    }
    catch (error) {
        console.error(error)
        res.status(500).send({ message: 'me recontracaguendios y la reputisima madre que lo pario ' })
    }
    },

    async filmByGenre(req,res){
        let genre = req.params.genre;
        const filmsGenre = await Film.findOne({
            where: {
                genre: genre
            }
        });
        res.send(filmsGenre);
    },
    async filmByStatus(req,res){
        let status = req.params.status;
        const filmsStatus = await Film.findOne({
            where: {
                status: status
            }
        });
        res.send(filmsStatus);
    },
    async filmByTitle(req,res){
        let title = req.params.title;
        const filmByTitle = await Film.findOne({
            where: {
                title: title
            }
        });
        res.send(filmByTitle);
    }

}

module.exports = pageController;
