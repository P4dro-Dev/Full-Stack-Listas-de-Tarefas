// backend/src/server.js
const express = require('express');
const cors = require('cors'); // Importa o módulo CORS
require('dotenv').config({ path: '../.env' }); // Caminho relativo para o .env

const tarefasRoutes = require('./routes/tarefasRoutes');
const db = require('./config/db'); // Garante que a conexão com o DB seja estabelecida

const app = express();
const PORT = process.env.PORT || 3001; // Porta padrão 3001 para o backend

// Middlewares
app.use(cors()); // Habilita o CORS para todas as requisições
app.use(express.json()); // Habilita o parsing de JSON no corpo das requisições

// Rotas da API
app.use('/tarefas', tarefasRoutes); // As rotas serão acessíveis via /tarefas/... 

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor backend rodando na porta ${PORT}`);
});