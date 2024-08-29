let { orientacoes } = require("../../bancoDeDados");

// Excluir orintacao
const excluirOrientacao = function(req, res){
   
    try {
        const { id } = req.params;

        const index = orientacoes.findIndex((orintacao) => {
            return orintacao.id === Number(id);
        });
    
        if(index === -1){
            return res.status(400).json({ mensagem: "orintacao não localizado!" });
        }
    
        // Remove o usuário do array
        orientacoes.splice(index, 1);
    
        return res.status(204).json({ mensagem: "orintacao Excluído com sucesso!" });
        
    } catch (error) {
        console.error("Erro ao listar usuários:", error.message);

        return res.status(500).json({mensange:"Erro interno do Servidor"})

        
    }




}

module.exports = {
    excluirOrientacao
}
