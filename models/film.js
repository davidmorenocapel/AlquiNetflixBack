'use strict';
module.exports = (sequelize, DataTypes) => {
  const Film = sequelize.define('Film', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    image: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {});
  Film.associate = function(models) {
    // associations can be defined here
  };
  return Film;
};