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

        //traz todos os dados da tabela
        const produto = await Produto.findAll();
        console.log(produto);

        //realiza a pesquisa a partir da chave primária
        const carro = await Carro.findByPk(1); 
        console.log(carro);

    } catch (error) {
        console.log(error);
    }
})();