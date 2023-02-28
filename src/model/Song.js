const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const Song = sequelize.define('song', {
    // Definimos las columnas aquí
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    artist: {
        type: DataTypes.STRING(100),
        allowNull: false   // allowNull por defecto esta en true
    },
    genre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    releseDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
});

module.exports = Song;