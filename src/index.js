const express = require('express')
const rotas = require('./rotas/rotas')
const rotaOrientacao = require('./rotas/rotasOrientacoes')
const app = express()

app.use(express.json())

app.use(rotas)
app.use(rotaOrientacao)








app.listen(3000, () => {
    console.log('Servidor: http://localhost:3000');
})