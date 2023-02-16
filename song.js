const {Sequelize, sequelize} = require('./db');

const {DataTypes} = require("sequelize");
let Song = sequelize.define("Band", {
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
   });






module.exports = {
    Song
};