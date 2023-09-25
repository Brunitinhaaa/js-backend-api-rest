const express = require('express');
const { obterLivros, obterLivroPorId, adicionarLivro, alterarLivro, alterarParteDoLivro, excluirLivro } = require('./controladores.js/biblioteca');
const rotas = express();

rotas.get('./livros', obterLivros);
rotas.get('/livros/:id', obterLivroPorId);
rotas.post('/livros', adicionarLivro);
rotas.put('/livros', alterarLivro);
rotas.patch('/livros', alterarParteDoLivro);
rotas.delete('/livros/:id', excluirLivro);

module.exports = rotas;