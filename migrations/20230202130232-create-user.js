'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      full_name: {
        type: Sequelize.STRING
      },
      user: {
        type: Sequelize.STRING
      },
      level: {
        type: Sequelize.INTEGER
      },
      status: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user');
  }
};