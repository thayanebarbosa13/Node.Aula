const { where } = require('sequelize');

//index.js
(async () => {
    const database = require('./db');
    const Produto = require('./produto');
    const Carro = require('./carro');

    try {
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreate = await Produto.create({
            nome: 'mouse',
            preco: 10,
            descricao: 'Um mouse USB bonitão'
        })
        console.log(resultadoCreate);

        const resultadoCreateUsuario = await Carro.create({
            modelo: 'BMW',
            cor: 'Verde',
            placa: 'ABC123',
            descricao: 'Passeio nos fins de semana'
        })
        console.log(resultadoCreateUsuario);

        /*
        //consulta todos os dados da tabela
        const produto = await Produto.findAll();
        console.log(produto);

        //realiza a pesquisa a partir da chave primária
        const carro = await Carro.findByPk(1); 
        console.log(carro);
        */

        /*
            //REALIZA A BUSCA DO ÍTEM A PARTIR DA ID 1
        const produto = await Produto.findByPk(1);
        //console.log(produto)
        produto.nome = "Mouse Top";

            //SALVA ALTERAÇÃO DOS DADOS DA TABELA
        const resultadoSave = await produto.save();
        console.log(resultadoSave);

        const carro = await Carro.findByPk(1);
        //console.log(produto)
        carro.cor = "Vermelho";

            
        const resultadoGuardar = await carro.save();
        console.log(resultadoGuardar);
        */

        //DELETAR DADOS
        //assim
        Produto.destroy({ where: { id: 1 }});

        //ou assim
        const produto = await Produto.findByPk(3);
        produto.destroy();


    } catch (error) {
        console.log(error);
    }
})();