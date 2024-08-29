let { orientacoes } = require("../../bancoDeDados");


// detalharOrientacao


const detalharOrientacao = (req, res)=>{
 try {   const { id } = req.params;

    
 const resultado = orientacoes.find((orientacao) =>{
 
     return orientacao.id === Number (id);
 
 })
 
 if (!resultado) {
     return res.status(400).json({mensagem: " orientacao não localizado!"})
     
 }
 
 return res.status(200).json(resultado)
    
 } catch (error) {
    console.error("Erro ao listar usuários:", error.message);

    return res.status(500).json({mensange:"Erro interno do Servidor"})

    
 }



}


module.exports= {
    detalharOrientacao
}