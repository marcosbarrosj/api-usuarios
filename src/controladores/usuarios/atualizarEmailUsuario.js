let { usuarios } = require("../../bancoDeDados");


//atualizarEmailUsuario



const atualizarEmailUsuario = (req, res)=>{


    try {
        
    const { id }= req.params;

    const { email} = req.body

    const resultado = usuarios.find((usuario) =>{

        return usuario.id === Number (id);
    
    })
    
    if (!resultado) {
        return res.status(400).json({mensagem: " usuario não localizado!"})
        
    }

    resultado.email = email;

    return res.status(200).json({mensagem :"Usuario Atualizado"})

        
    } catch (error) {
        console.error("Erro ao listar usuários:", error.message);

            return res.status(500).json({mensange:"Erro interno do Servidor"})

        
    }





}

module.exports= {
    atualizarEmailUsuario
}
