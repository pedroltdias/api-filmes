const roteador = require('express').Router()

roteador.get('/', (requisicao, resposta) => {
    const filmes = [
        { nome: 'Os Vingadores 3'},
        { nome: 'Destacamento Blood'},
        { nome: 'Pantera Negra'}
    ]

    resposta.send(JSON.stringify(filmes))
})

module.exports = roteador