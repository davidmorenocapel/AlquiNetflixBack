'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    startRent: DataTypes.DATE,
    finishRent: DataTypes.DATE,
    filmId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
    // associations can be defined here
  
  Order.associate = function(models) {
    Order.belongsTo(models.User);
    Order.belongsTo(models.Film);
  };
  return Order;
};