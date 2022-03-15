const roteador = require('express').Router()

const filmes = [
    { nome: 'Os Vingadores 3'},
    { nome: 'Destacamento Blood'},
    { nome: 'Pantera Negra'}
]

roteador.get('/', (requisicao, resposta) => {
    resposta.send(JSON.stringify(filmes))
})

roteador.post('/', (requisicao, resposta) => {      
    //Adiciona novo filme (validacao)
    filmes.push(requisicao.body)
    resposta.send(JSON.stringify(requisicao.body))
})

module.exports = roteador