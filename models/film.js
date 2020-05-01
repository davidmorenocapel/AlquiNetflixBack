'use strict';
module.exports = (sequelize, DataTypes) => {
  const Film = sequelize.define('Film', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    image: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    description: DataTypes.STRING
  }, {});
    // associations can be defined here
  Film.associate = function(models) {
  Film.hasMany(models.Order)
  };
  return Film ;
};