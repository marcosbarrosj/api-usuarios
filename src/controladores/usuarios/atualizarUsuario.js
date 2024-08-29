let { usuarios } = require("../../bancoDeDados");



// atualizarUsuario

const atualizarUsuario = (req, res)=>{
  
try {
    const { id }= req.params;

    const {nome, email, senha} = req.body

    if (!nome) {
        return res.status(400).json({mensagem: "O nome é obrigatório!"})
           
       }
       
       if (!email) {
         return res.status(400).json({mensagem: "O email é obrigatório!"})
       
       }
       
       if (!senha) {
           return res.status(400).json({mensagem: "O senha é obrigatória!"})
       
       }
       
    
       const resultado = usuarios.find((usuario) =>{

        return usuario.id === Number (id);
    
    })
    
    if (!resultado) {
        return res.status(400).json({mensagem: " usuario não localizado!"})
        
    }

    
const resultadoEmail = usuarios.find((usuario) =>{

    return usuario.email === email;

})

if (resultadoEmail) {
    return res.status(400).json({mensagem: "já existe usuario cadastrado com E-mail informado!"})
    
}


    resultado.nome = nome;

    resultado.email = email;

    resultado.senha = senha


    return res.status(200).json({mensagem :"Usuario Atualizado"})
    
   
    
} catch (error) {
    console.error("Erro ao listar usuários:", error.message);

    return res.status(500).json({mensange:"Erro interno do Servidor"})

    
}



}



module.exports= {
    atualizarUsuario
}
