
const { User } = require('../models/index'); //requerir la tabla
const db = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;



const userController = {//

    /* EJEMPLO ENDPOINT
     async TU NOMBRE DE ESTA FUNCION(req,res){
        const TU VARIABLE DE ESTA FUNCION = await TABLA.findAll <==METODO ({
        });
        res.send(TU VARIABLE DE ESTA FUNCION);
    },*/
    async usersList(req,res){
        const users = await User.findAll({
        });
        res.send(users);
    },
    async userById(req,res){
        try{
        let id = req.params.id;
        const user = await User.findOne({
            where: {
                id: id
            }
        })
        res.send(user)
    }
    catch (error) {
        console.error(error)
        res.status(500).send({ message: 'Pues va a ser que no sale na, has puesto bien servers y xamp? ' })
    }
    },
    async newUser(req, res){
        await User.create({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            surname: req.body.surname
           /*password: bcrypt.hashSync(req.body.password, 10),
           rol: req.body.rol*/
       })
       res.status(200).send({mensaje: 'Usuario creado'})
   },
       async deleteUserByID(req,res){
        let _id = req.params.id;
        const deleteUserById = await User.destroy({
            where:{
                id: _id
            }
        });
        res.send({mensaje: 'Usuario eliminado'})
    },
    async deleteUserByEmail(req,res){
        let _email = req.params.email;
        const deleteUserById = await User.destroy({
            where:{
                email: _email
            }
        });
        res.send({mensaje: 'Usuario eliminado'})
    }
}

module.exports = userController;
