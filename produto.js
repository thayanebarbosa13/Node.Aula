const Sequelize = require ('sequelize');
const database = require('./db');

const Produtos = database .define ('produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false 
    },
    preco: {
        type: Sequelize.DOUBLE,
    },
    descricao: Sequelize.STRING
})

module.exports = Produtos;