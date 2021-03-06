'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  review.init({
    category: DataTypes.STRING,
    title: DataTypes.STRING,
    publisher: DataTypes.STRING,
    coverArtUrl: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};