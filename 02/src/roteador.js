const express = require('express');
const { obterConvidados, cadastrarConvidados, deletarConvidados } = require('./controladores/convidados');
const rotas = express();

rotas.get('/convidados', obterConvidados);
rotas.post('/convidados', cadastrarConvidados);
rotas.delete('/convidados/:nome', deletarConvidados);

module.exports = rotas;