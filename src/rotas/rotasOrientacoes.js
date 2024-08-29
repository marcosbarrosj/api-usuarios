const express = require('express');
const { cadastarOrientacao } = require('../controladores/orientacoes/cadastarOrientacao');
const { listarUsuarios } = require('../controladores/orientacoes/listarOrientacoes');
const { detalharOrientacao } = require('../controladores/orientacoes/detalharOrientacao');
const { atualizarOrientacao } = require('../controladores/orientacoes/atualizarOrientacao');
const { atualizartituloOrientacao } = require('../controladores/orientacoes/atualizartituloOrientacao');
const { excluirOrientacao } = require('../controladores/orientacoes/excluirOrientacao');





const rotasOrientacoes = express()



rotasOrientacoes.post('/orientacao', cadastarOrientacao);
rotasOrientacoes.get('/orientacao', listarUsuarios);
rotasOrientacoes.get('/orientacao/:id', detalharOrientacao);
rotasOrientacoes.put('/orientacao/:id', atualizarOrientacao);
rotasOrientacoes.patch('/orientacao/:id/titulo', atualizartituloOrientacao);
rotasOrientacoes.delete('/orientacao/:id', excluirOrientacao);









module.exports = rotasOrientacoes