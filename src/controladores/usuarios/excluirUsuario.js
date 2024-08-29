let { usuarios } = require("../../bancoDeDados");

// Excluir Usuario
const excluirUsuario = function(req, res){
    const { id } = req.params;

    const index = usuarios.findIndex((usuario) => {
        return usuario.id === Number(id);
    });

    if(index === -1){
        return res.status(400).json({ mensagem: "Usuário não localizado!" });
    }

    // Remove o usuário do array
    usuarios.splice(index, 1);

    return res.status(200).json({ mensagem: "Usuário Excluído com sucesso!" });
}

module.exports = {
    excluirUsuario
}
