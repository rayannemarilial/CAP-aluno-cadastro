const mongoose = require('mongoose');

const AlunoSchema = new mongoose.Schema({
    nome: { type: String, required: true, maxlength: 100 },
    email: { 
        type: String, 
        required: true, 
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Por favor, insira um e-mail válido'] 
    },
    curso: { type: String, required: true },
    periodo: { type: String, required: true },
    turma: { type: String, required: true },
    turno: { type: String, required: true },
    endereco: { type: String, required: true },
    telefone: { 
        type: String, 
        required: true, 
        match: [/^\d{10,11}$/, 'Por favor, insira um telefone válido (10-11 dígitos)'] 
    }
}, {
    timestamps: true 
});

module.exports = mongoose.model('Aluno', AlunoSchema);
