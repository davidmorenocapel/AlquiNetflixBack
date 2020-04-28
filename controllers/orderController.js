
const { Order } = require('../models/index'); //requerir la tabla
const db = require('../models/index');
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
    }
}

module.exports = orderController;