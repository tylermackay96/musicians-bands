const {Band} = require('./Band')
const {Musician} = require('./Musician')
const {Song} = require('./song')

Band.hasMany(Musician)

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');


// define the SongBand model to represent the association table
class SongBand extends Model {}
SongBand.init({}, { sequelize, modelName: 'songBand' });

// define the associations
Band.belongsToMany(Song, { through: SongBand });
Song.belongsToMany(Band, { through: SongBand });

// export the models
module.exports = { Band, Song, Musician };