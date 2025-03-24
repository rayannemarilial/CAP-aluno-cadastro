const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contatoRoutes = require('./src/routes/contatoRoutes');

const app = express();
app.use(cors());

app.use(express.json());


mongoose.connect('mongodb+srv://Rayanne:220506Ma@teste.med9a.mongodb.net/', {
  serverSelectionTimeoutMS:300000
})
.then(() => console.log('Conectado ao MongoDB com sucesso!'))
.catch(err => console.error('Erro ao conectar ao MongoDB:', err));


app.get('/health', (req, res) => {
  res.status(200).json({ status: 200, message: 'Servidor ativo!' });
});


app.use('/api', contatoRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});