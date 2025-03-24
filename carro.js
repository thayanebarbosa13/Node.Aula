//carro.js
const Sequelize = require('sequelize');
const database = require('./db');

const Carro = database.define('carros',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    modelo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cor: {
        type: Sequelize.STRING
    },
    placa: {
        type: Sequelize.STRING
    },
    descricao: Sequelize.STRING
})

module.exports = Carro;