const bancoDeDados = require("../../bancoDeDados");
let { usuarios } = require("../../bancoDeDados");
const bcrypt = require('bcrypt');



const cadastarUsuario = async (req, res) =>{

 try {

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
    
        return usuario.email === email;
    
    })
    
    
    if (resultado) {
        return res.status(400).json({mensagem: "já existe usuario cadastrado com E-mail informado!"})
        
    }
    
    // para criptar a senha do usuario 
    const senhaEncriptada = await bcrypt.hash(senha, 10)
    
    const usuario = {
        id: bancoDeDados.contador +=1,
        nome: nome,
        email: email,
        senha: senhaEncriptada
    }
    
    usuarios.push(usuario)
    // return res.status(201).json(usuario)
    
    const {senha:_, ...usuarioSemSenha} = usuario
    
    return res.status(201).json(usuarioSemSenha)
    



    
 } catch (error) {
    return res.status(500).json({mensange:"Erro interno do Servidor"})

    
 }


}

module.exports= {
    cadastarUsuario
}