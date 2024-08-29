
const bancoDeDados = require("../../bancoDeDados");
const bcrypt = require('bcrypt');
let { orientacoes } = require("../../bancoDeDados");


// listarUsuarios

const listarUsuarios = (req, res)=>{

    try {
        return res.status(200).send(orientacoes)
        
    } catch (error) {
        console.error("Erro ao listar usuários:", error.message);
        
        return res.status(500).json({mensange:"Erro interno do Servidor"})

    }

   

}


module.exports= {
    listarUsuarios
}
