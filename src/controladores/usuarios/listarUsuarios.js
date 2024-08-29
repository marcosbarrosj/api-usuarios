
const bancoDeDados = require("../../bancoDeDados");
const bcrypt = require('bcrypt');
let { usuarios } = require("../../bancoDeDados");


// listarUsuarios

const listarUsuarios = (req, res)=>{

try {
    return res.status(200).send(usuarios)

    
} catch (error) {
    return res.status(500).json({mensange:"Erro interno do Servidor"})
}





}


module.exports= {
    listarUsuarios
}

