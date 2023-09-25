const express = require('express');
const {
    obterAlunos,
    obterAlunoPeloId,
    adicionarAluno,
    deletarAluno } = require('./controladores/alunos');

const rotas = express();

rotas.get('/alunos', obterAlunos);
rotas.get('/alunos/:id', obterAlunoPeloId);
rotas.post('/alunos', adicionarAluno);
rotas.delete('/alunos/:id', deletarAluno);

module.exports = rotas;




