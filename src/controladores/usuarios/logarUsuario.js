const bcrypt = require('bcrypt');
let { usuarios } = require("../../bancoDeDados");



// logarUsuario


// senha  async crip

const logarUsuario = async (req, res)=>{

   try {

    const { email, senha} = req.body;

    
    if (!email) {
        return res.status(400).json({mensagem: "O email é obrigatório!"})
      
      }
      
      if (!senha) {
          return res.status(400).json({mensagem: "O senha é obrigatória!"})
      
      }
    
         
      const usuario = usuarios.find(usuario => usuario.email === email );
    
      // await 
      
      const senhaValida = await bcrypt.compare(senha, usuario.senha )
    
    if (!senhaValida) {
        return res.status(404).json({ mensagem: "E-mail e Senha não encontrados." });
    
    }else {
        return res.status(200).json({ usuario: `Usuario logado com sucesso` });
          
    }
    
   } catch (error) {
        return res.status(500).json({mensange:"Erro interno do Servidor"})

    
   }


//   if (!usuario) {
//       return res.status(404).json({ mensagem: "E-mail e Senha não encontrados." });
//   } else {
//       return res.status(200).json({ usuario: `Usuario logado com sucesso` });
//   }





}






module.exports= {
    logarUsuario
}