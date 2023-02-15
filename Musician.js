const {Sequelize, sequelize} = require('./db');

// TODO - define the Musician model
const {DataTypes} = require("sequelize");
let Musician = sequelize.define("Band", {
    name: DataTypes.STRING,
    instrument: DataTypes.STRING,
   });


module.exports = {
    Musician
};