const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

const roteador = require('./rotas/filmes')
app.use('/api/filmes/', roteador)

app.listen(3000, () => console.log('Teste'))