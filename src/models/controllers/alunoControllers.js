const Aluno = require('../models/aluno');

exports.obterTodosAlunos = async (req, res) => {
    try {
        const alunos = await Aluno.find();
        res.json(alunos);
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao listar os alunos' });
    }
};

exports.adicionarAluno = async (req, res) => {
    try {
        const novoAluno = new Aluno(req.body);
        await novoAluno.save();
        res.status(201).json(novoAluno);
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao adicionar aluno' });
    }
};

exports.atualizarAluno = async (req, res) => {
    try {
        const alunoAtualizado = await Aluno.findByIdAndUpdate(
            req.params.id, req.body, { new: true }
        );
        res.json(alunoAtualizado);
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao atualizar aluno' });
    }
};

exports.excluirAluno = async (req, res) => {
    try {
        await Aluno.findByIdAndDelete(req.params.id);
        res.json({ mensagem: 'Aluno removido com sucesso' });
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao excluir aluno' });
    }
};