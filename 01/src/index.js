const express = require('express');
const roteador = require('./roteador');
const validaSenha = require('./Intermediarios.js');
const app = express();

app.use(express.json());
app.use(validaSenha);
app.use(roteador);

app.listen(3000);

