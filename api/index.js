const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/api/filmes', (requisicao, resposta) => {
    const filmes = [
        { nome: 'Os Vingadores 3'},
        { nome: 'Destacamento Blood'},
        { nome: 'Pantera Negra'}
    ]

    resposta.send(JSON.stringify(filmes))
})

app.listen(3000, () => console.log('Teste'))