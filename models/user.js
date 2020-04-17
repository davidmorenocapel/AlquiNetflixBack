'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    password: DataTypes.STRING,
    orders: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    // associations can be defined here 
  };
  return User;
};