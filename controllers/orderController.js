
const { Order, Film, User } = require('../models/index'); //requerir la tabla
//const db = require('../models/index');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const orderController = {//

    /* EJEMPLO ENDPOINT
     async TU NOMBRE DE ESTA FUNCION(req,res){
        const TU VARIABLE DE ESTA FUNCION = await TABLA.findAll <==METODO ({
        });
        res.send(TU VARIABLE DE ESTA FUNCION);
    },*/
    async orderList(req,res){
        const orders = await Order.findAll({
        });
        res.send(orders);
    },
    orderByUserId(req, res){
        let { id } = req.params;
        Order.findAll({ 
            include: [ 
                { model: Film
                },                    
                { model: User,
                    where: { id }
                }    
            ],
        })// agrupamos los pedidos en allOrders, y eso se lo pasamos a la funcion
        .then(allOrders => {
            res.send(allOrders)
         })
    }
}

module.exports = orderController;