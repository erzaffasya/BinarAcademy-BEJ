'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json');
const db = {};
let sequelize;

sequelize = new Sequelize(config.database, config.username, config.password, {
  host:config.host,
  dialect:config.dialect,
  operatorsAliases:false,
  pool:{
    max:config.max,
    min: config.min,
    acquire: config.acquire,
    idle:config.idle
  }
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
// console.log(sequelize)
// sequelize.authenticate().then(function (errors) { console.log(errors) });


fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tutorials = require("./user.js")(sequelize, Sequelize);
module.exports = db;
