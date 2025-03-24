const Aluno = required('../models/aluno');

const criarAluno = async (data) => {
    try {
        const aluno = new Aluno(data);
        await aluno.save();
        return aluno;
    }   catch (error) {
        throw new Error('Erro ao adicionar aluno: ' + error.message);
    }
};

const listarAluno = async () => {
    try {
        return await Aluno.find().sort({ createdAt: -1});
    }   catch (error) {
        throw new Error('Erro ao listar aluno: ' + error.message);
    }
};

module.exports = { criarAluno, listarAluno};