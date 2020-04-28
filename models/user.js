'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    orders: DataTypes.STRING
  }, {});
    // associations can be defined here
  User.associate = function(models) {
    User.hasMany(models.Order)
  };
  
  return User;
};