const express = require('express');
const { cadastarUsuario } = require('../controladores/usuarios/cadastarUsuario');
const { listarUsuarios } = require('../controladores/usuarios/listarUsuarios');
const { detalharUsuario } = require('../controladores/usuarios/detalharUsuario');
const { atualizarUsuario } = require('../controladores/usuarios/atualizarUsuario');
const { atualizarEmailUsuario } = require('../controladores/usuarios/atualizarEmailUsuario');
const { excluirUsuario } = require('../controladores/usuarios/excluirUsuario');
const { logarUsuario } = require('../controladores/usuarios/logarUsuario');





const rotas = express()



rotas.post('/usuario', cadastarUsuario);
rotas.get('/usuarios', listarUsuarios);
rotas.get('/usuario/:id', detalharUsuario);
rotas.put('/usuario/:id', atualizarUsuario);
rotas.patch('/usuario/:id/email', atualizarEmailUsuario);
rotas.delete('/usuario/:id', excluirUsuario);
rotas.post('/login', logarUsuario)



module.exports = rotas