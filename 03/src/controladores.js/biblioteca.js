const livros = require("../bancodedados/biblioteca");

let proximoId = 3;

const obterLivros = (req, res) => {
    return res.json(livros);
}

const obterLivroPorId = (req, res) => {
    const livroId = Number(req.params.id);

    if (isNaN) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da url não é um número válido" });
    }

    const livro = livros.find(livro => {
        livro.id === livroId;
    });

    if (!livro) {
        return res.status(400).json({ mensagem: "Não existe livro para o id informado" });
    }

    return res.json(livro);
}

const adicionarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo) {
        return res.status(400).json({ mensagem: 'O campo título é obrigatório' });
    }

    if (!autor) {
        return res.status(400).json({ mensagem: 'O campo autor é obrigatório' });
    }

    if (!ano) {
        return res.status(400).json({ mensagem: 'O campo ano é obrigatório' });
    }

    if (!numPaginas) {
        return res.status(400).json({ mensagem: 'O campo numPaginas é obrigatório' });
    }

    const novoLivro = {
        id: proximoId,
        titulo,
        autor,
        ano,
        numPaginas
    }

    livros.push(novoLivro);

    proximoId++;

    return res.status(201).json(novoLivro);
}

const alterarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body;

    if (!titulo) {
        return res.status(400).json({ mensagem: 'O campo título é obrigatório' });
    }

    if (!autor) {
        return res.status(400).json({ mensagem: 'O campo autor é obrigatório' });
    }

    if (!ano) {
        return res.status(400).json({ mensagem: 'O campo ano é obrigatório' });
    }

    if (!numPaginas) {
        return res.status(400).json({ mensagem: 'O campo numPaginas é obrigatório' });
    }

    const livroExistente = livros.find(livro => {
        livro.id === Number(req.params.id);
    });

    if (!livroExistente) {
        return res.status(400).json({ mensagem: 'Não existe livro a ser substituído para o ID informado' });
    }

    livroExistente.titulo = titulo;
    livroExistente.autor = autor;
    livroExistente.ano = ano;
    livroExistente.numPaginas = numPaginas;

    return res.json({ mensagem: 'Livro Substituido' });
}

const alterarParteDoLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body;

    const livroExistente = livros.find(livro => {
        livro.id === Number(req.params.id);
    });

    if (!livroExistente) {
        return res.status(400).json({ mensagem: 'Não existe livro a ser substituído para o ID informado' });
    }

    if (titulo) {
        livroExistente.titulo = titulo;
    }

    if (autor) {
        livroExistente.autor = autor;
    }

    if (ano) {
        livroExistente.ano = ano;
    }

    if (numPaginas) {
        livroExistente.numPaginas = numPaginas;
    }
}

const excluirLivro = (req, res) => {
    const indiceLivro = livros.findIndex(livro => {
        livro.id === Number(req.params.id);
    });

    if (!indiceLivro < 0) {
        return res.status(400).json({ mensagem: 'Não existe livro a ser excluído para o ID informado' });
    }

    livros.splice(indiceLivro, 1);

    return res.json({ mensagem: 'Livro removido' });
}

module.exports = {
    obterLivros,
    obterLivroPorId,
    adicionarLivro,
    alterarLivro,
    alterarParteDoLivro,
    excluirLivro
}

