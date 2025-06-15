// backend/src/routes/tarefasRoutes.js
const express = require('express');
const router = express.Router();
const tarefasController = require('../controllers/tarefasController');

// POST /tarefas - Cadastrar uma nova tarefa 
router.post('/', tarefasController.createTarefa);

// GET /tarefas - Listar todas as tarefas 
router.get('/', tarefasController.getAllTarefas);

// PUT /tarefas/:id - Alterar status (concluir tarefa) 
router.put('/:id', tarefasController.updateTarefaStatus);

// DELETE /tarefas/:id - Remover uma tarefa 
router.delete('/:id', tarefasController.deleteTarefa);

module.exports = router;