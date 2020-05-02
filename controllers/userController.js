const { User, Token } = require('../models/index'); //requerir la tabla
const db = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const userController = {//

    /* EJEMPLO ENDPOINT
     async TU NOMBRE DE ESTA FUNCION(req,res){
        const TU VARIABLE DE ESTA FUNCION = await TABLA.findAll <==METODO ({
        });
        res.send(TU VARIABLE DE ESTA FUNCION);
    },*/
    async usersList(req,res){
        const users = await User.findAll({
        //    attributes: {exclude:['password']},
            include: Token
        
        });
        res.send(users);
    },
    async userById(req,res){
        try{
        let id = req.params.id;
        const user = await User.findOne({
            attributes: {exclude:['password']},
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
    async newUser(req,res){
        try {
         const hash = await bcrypt.hash(req.body.password,10)
         const user = await User.create({
             ...req.body,
             password:hash
         })
          res.send(user);
          res.send
        } catch (error) {
         console.log(error)
         res.status(200).send({mensaje: 'Usuario creado'})
        }
    },
    // para el postman
    /*async newUser(req, res){
        await User.create({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            surname: req.body.surname
       })
       res.status(200).send({mensaje: 'Usuario creado'})
    },*/
     async login(req,res){
    try {const user = await User.findOne({
            where:{
                email:req.body.email,
            }
        });
            if(!user){
                return res.status(400).send({message:"Email o contraseña incorrectos"})
            }
        const isMatch = await bcrypt.compare(req.body.password,user.password)
            if(!isMatch){
                return res.status(400).send({message:"Email o contraseña maaaaaaaaaaaaaal"})
            } 
            const token = jwt.sign({id:user.id}, 'TuClaveAquiLadron' , {expiresIn:'2w'} );
            Token.create({token,UserId:user.id});
            res.send({message:`welcome ${user.name}` , user,token});
        }
         catch(error) {
            console.log(error)
            res.status(200).send({mensaje: 'Usuario creado'})
           }
        
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
    },
    async editUser(req,res){
        let body =  req.body;
        let _id = req.params.id;
        const edit = await User.update({
            name: body.name,
            surname: body.surname,
            password: body.password
        },{
        where: {
            id: _id
        }
        })
        res.send({mensaje: 'Usuario actualizado', edit})
    },

}

module.exports = userController;
