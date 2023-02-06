'use strict';
const {
  Model, NOW
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Item.init({
    nama_barang: {
      type: DataTypes.STRING
    },
    stok: {
      type: DataTypes.INTEGER
    },
    harga: {
      type: DataTypes.NUMERIC
    },
    createdAt: {
      type: DataTypes.DATE
    },
    updatedAt: {
      type: DataTypes.DATE
    },
    deletedAt: {
      type: DataTypes.DATE
    }

  }, {
    sequelize,
    modelName: 'item',
  });
  return Item;
};