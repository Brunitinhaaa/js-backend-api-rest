const alunos = require('../bancodedados/alunos');

let idProximoAlunoCriado = 1;

const obterAlunos = (req, res) => {
    return res.json(alunos);
}

const obterAlunoPeloId = (req, res) => {
    const idRequisitado = Number(req.params.id);

    if (isNaN(idRequisitado)) {
        return res.status(400).json({ mensagem: 'O id informado não é um número válido' })
    }

    const aluno = alunos.find((aluno) => {
        return aluno.id === idRequisitado;
    });

    if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado' });
    }

    return res.json(aluno);
}

const adicionarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: 'O nome deve ser informado' });
    }

    if (!sobrenome) {
        return res.status(400).json({ mensagem: 'O sobrenome deve ser informado' });
    }

    if (!idade) {
        return res.status(400).json({ mensagem: 'A idade deve ser informado' });
    }

    if (!curso) {
        return res.status(400).json({ mensagem: 'O curso deve ser informado' });
    }

    if (idade < 18) {
        return res.status(400).json({ mensagem: 'O aluno a ser adicionado deve ter pelo menos 18 anos' });
    }

    const novoAluno = {
        id: idProximoAlunoCriado,
        nome,
        sobrenome,
        idade,
        curso
    }

    alunos.push(novoAluno);

    idProximoAlunoCriado++;

    return res.status(201).send();
}

const deletarAluno = (req, res) => {
    const idRequisitado = Number(req.params.id);

    if (isNaN(idRequisitado)) {
        return res.status(400).json({ mensagem: 'O id informado não é um número válido' })
    }

    const indiceAlunoDelete = alunos.findIndex((aluno) => {
        return aluno.id === idRequisitado;
    }); //caso não encontre retorna -1, caso encontre, retorna o index dentro do array

    if (indiceAlunoDelete < 0) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado' });
    }

    const alunoDeletado = alunos.splice(indiceAlunoDelete, 1)[0];

    console.log(alunoDeletado);
}


module.exports = {
    obterAlunos,
    obterAlunoPeloId,
    adicionarAluno,
    deletarAluno
}

