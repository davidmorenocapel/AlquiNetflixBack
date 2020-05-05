
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
        let _id = req.params.id;
        const film = await Film.findOne({
            where: {
                id: _id
            }
        })
        res.send(film)
    }
    catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Pues va a ser que no sale na, has puesto bien servers y xamp? ' })
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
    async filmByRating(req,res){
        let rating = req.params.rating;
        const filmsByRating = await Film.findAll({
            where: {
                rating: rating
            }
        });
        res.send(filmsByRating);
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
        let _title = req.params.title;
        const filmByTitle = await Film.findAll({
                where: {
                    title: {[Op.like]: '%'+ _title +'%'}

                }

        });
        res.send(filmByTitle);
    },
    async newFilm(req,res){
        try {
         const film = await Film.create({
            id: req.body.id,
            title: req.body.title,
            genre: req.body.genre,
            image: req.body.image,
            status: req.body.status,
            description: req.body.description,
            createdAt: req.body.createdAt,
            updatedAt: req.body.updatedAt
         })
          res.send(film);
          res.send
        } catch (error) {
         console.log(error)
         res.status(200).send({mensaje: 'Error!!!!'})
        }
    }
}

module.exports = pageController;
