//pets.js
const Sequelize = require('sequelize');
const database = require('./db');

const Pets = database.define('pets',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    raca: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cor: {
        type: Sequelize.STRING
    },
    porte: {
        type: Sequelize.STRING
    },
    descricao: Sequelize.STRING
})

module.exports = Pets;