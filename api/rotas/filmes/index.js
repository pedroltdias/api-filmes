const roteador = require('express').Router()

const filmes = [
    { 
        nome: 'Os Vingadores 3',
        ano: 2018
    },
    { 
        nome: 'Destacamento Blood',
        ano: 2017
    },
    { 
        nome: 'Pantera Negra',
        ano: 2018
    }
]

roteador.get('/', (requisicao, resposta) => {
    resposta.send(
        JSON.stringify(filmes)
    )
})

roteador.post('/', (requisicao, resposta) => {      
    if (!requisicao.body.nome || !requisicao.body.ano){
        resposta.status(400)
        resposta.send(
            JSON.stringify({
                mensagem: 'Os campos "nome" e "ano" são obrigatórios e não podem ficar em branco!'
            })
        )
    }
    filmes.push(requisicao.body)
    resposta.send(
        JSON.stringify(requisicao.body)
    )
})

roteador.get('/:idFilme', (requisicao, resposta) => {
    const id = requisicao.params.idFilme;
    resposta.send(
        JSON.stringify(filmes[id])
    )
})

module.exports = roteador