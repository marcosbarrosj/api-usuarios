let { orientacoes } = require("../../bancoDeDados");



// atualizarOrientacao

const atualizarOrientacao = (req, res)=>{
   
    try {

        const { id }= req.params;

        const {titulo, descricao, imagem} = req.body
    
        if (!titulo) {
            return res.status(400).json({mensagem: "O titulo é obrigatório!"})
               
           }
           
           if (!descricao) {
             return res.status(400).json({mensagem: "O descricao é obrigatório!"})
           
           }
           
           if (!imagem) {
               return res.status(400).json({mensagem: "O imagem é obrigatória!"})
           
           }
           
        
           const resultado = orientacoes.find((orientacao) =>{
    
            return orientacao.id === Number (id);
        
        })
        
        if (!resultado) {
            return res.status(400).json({mensagem: " orientacao não localizado!"})
            
        }
    
        
    const resultadodescricao = orientacoes.find((orientacao) =>{
    
        return orientacao.descricao === descricao;
    
    })
    
    if (resultadodescricao) {
        return res.status(400).json({mensagem: "já existe orientacao cadastrado !"})
        
    }
    
    
        resultado.titulo = titulo;
    
        resultado.descricao = descricao;
    
        resultado.imagem = imagem
    
    
        return res.status(200).json({mensagem :"orientacao Atualizado"})
        
       
    
        
    } catch (error) {
        console.error("Erro ao listar usuários:", error.message);

        return res.status(500).json({mensange:"Erro interno do Servidor"})

    }



}



module.exports= {
    atualizarOrientacao
}
