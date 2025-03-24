const express = require(`express`);
const alunoController = require('../controllers/alunoController');
const aluno = require('../models/aluno');

const router = express.Router();

router.post('/aluno', alunoController.criarAluno);
router.get('/aluno', alunoController.listarAluno);
router.put('/aluno/:id', alunoController.atualizarAluno);
router.delete('/aluno/:id', alunoController.deletarAluno);

module.exports = router;