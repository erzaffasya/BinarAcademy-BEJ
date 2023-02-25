'use strict';
const {
  Model, NOW
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    user_id: {
      type: DataTypes.INTEGER
    },
    item_id: {
      type: DataTypes.INTEGER
    },
    status: {
      type: DataTypes.STRING
    },
    total_harga: {
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
    modelName: 'order',
  });
  return Order;
};