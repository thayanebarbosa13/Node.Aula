//index.js
(async () => {
    const database = require('./db');
    const Produto = require('./produto');
    const Pets =  require('./pets')
   
    try {
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreate = await Produto.create({
            nome: 'mouse',
            preco: 10,
            descricao: 'Um mouse USB bonitão'
        })
        console.log(resultadoCreate);
    

        const resultadoCreatePets = await Pets.create({
            raca: 'siames',
            cor: 'branco',
            porte: 'Um mouse USB bonitão',
            descricao: 'Branco e preto'
        })
        console.log(resultadoCreatePets);

        /*
        //consulta todos os dados da tabela
        const produto = await Produto.findAll();
        console.log(produto);

        //realiza a pesquisa a partir da chave primária
        const carro = await Carro.findByPk(1); 
        console.log(carro);
        

            //REALIZA A BUSCA DO ÍTEM A PARTIR DA ID 1
        const produto = await Produto.findByPk(1);
        //console.log(produto)
        produto.nome = "Mouse Top";

            //SALVA ALTERAÇÃO DOS DADOS DA TABELA
        const resultadoSave = await produto.save();
        console.log(resultadoSave); */

        //assim
        Produto.destroy({ where: { id:9 }});

        //ou assim
        const produto = await Produto.findByPk(1);
        produto.destroy();



    } catch (error) {
        console.log(error);
    }
})();