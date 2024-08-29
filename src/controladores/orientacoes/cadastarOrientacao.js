const bancoDeDados = require("../../bancoDeDados");
let { orientacoes } = require("../../bancoDeDados");

const cadastarOrientacao = (req, res) => {
    try {
        const { titulo, descricao, imagem } = req.body;

        // Verifica se todos os campos obrigatórios foram preenchidos
        if (!titulo) {
            return res.status(400).json({ mensagem: "O título é obrigatório!" });
        }

        if (!descricao) {
            return res.status(400).json({ mensagem: "A descrição é obrigatória!" });
        }

        // Defina uma imagem padrão se não for fornecida
        const imagemPadrao = "url/para/imagem/padrao.png";
        const imagemFinal = imagem || imagemPadrao;

        // Verifica se já existe uma orientação com o mesmo título
        const resultado = orientacoes.find((orientacao) => orientacao.titulo === titulo);

        if (resultado) {
            return res.status(400).json({ mensagem: "Já existe uma orientação com o título informado!" });
        }

        // Cria um novo objeto de orientação
        const novaOrientacao = {
            id: bancoDeDados.contadorOrientacoes += 1,
            titulo: titulo,
            descricao: descricao,
            imagem: imagemFinal // Use a imagem padrão se necessário
        };

        // Adiciona a nova orientação ao array de orientações
        orientacoes.push(novaOrientacao);

        // Retorna a nova orientação criada com o status 201
        return res.status(201).json(novaOrientacao);

    } catch (error) {
        console.error("Erro ao cadastrar orientação:", error.message);
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
};

module.exports = {
    cadastarOrientacao
};
