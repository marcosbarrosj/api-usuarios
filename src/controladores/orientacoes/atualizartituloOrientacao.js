let { orientacoes } = require("../../bancoDeDados");


//atualizartituloOrientacao



const atualizartituloOrientacao = (req, res)=>{

   try {
    const { id }= req.params;

    const { titulo} = req.body

    const resultado = orientacoes.find((orientacao) =>{

        return orientacao.id === Number (id);
    
    })
    
    if (!resultado) {
        return res.status(400).json({mensagem: " titulo não localizado!"})
        
    }

    resultado.titulo = titulo;

    return res.status(200).json({mensagem :"titulo Atualizado"})



    
   } catch (error) {
    console.error("Erro ao listar usuários:", error.message);

    return res.status(500).json({mensange:"Erro interno do Servidor"})

   }



}

module.exports= {
    atualizartituloOrientacao
}
