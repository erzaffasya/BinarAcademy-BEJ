'use strict';
const {
  Model, NOW
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pokemon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pokemon.init({
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nama: {
      type: DataTypes.STRING
    },
    hit: {
      type: DataTypes.INTEGER
    },
    hp: {
      type: DataTypes.INTEGER
    },
    level: {
      type: DataTypes.INTEGER
    },

  }, {
    sequelize,
    modelName: 'Pokemon',
  });
  return Pokemon;
};