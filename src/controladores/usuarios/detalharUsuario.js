let { usuarios } = require("../../bancoDeDados");


// detalharUsuario



const detalharUsuario = (req, res)=>{
   try {

    const { id } = req.params;

    
    const resultado = usuarios.find((usuario) =>{
    
        return usuario.id === Number (id);
    
    })
    
    if (!resultado) {
        return res.status(400).json({mensagem: " usuario não localizado!"})
        
    }
    
    return res.status(200).json(resultado)
    


    
   } catch (error) {
    return res.status(500).json({mensange:"Erro interno do Servidor"})

    
   }

}


module.exports= {
    detalharUsuario
}