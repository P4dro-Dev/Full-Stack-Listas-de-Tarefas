// backend/src/controllers/tarefasController.js
const Tarefa = require('../models/Tarefa');

exports.createTarefa = async (req, res) => {
    try {
        const { descricao } = req.body;
        if (!descricao) {
            return res.status(400).json({ message: 'A descrição da tarefa é obrigatória.' });
        }
        const novaTarefa = await Tarefa.create(descricao);
        res.status(201).json(novaTarefa);
    } catch (error) {
        console.error('Erro ao cadastrar tarefa:', error);
        res.status(500).json({ message: 'Erro interno do servidor ao cadastrar tarefa.' });
    }
};

exports.getAllTarefas = async (req, res) => {
    try {
        const tarefas = await Tarefa.findAll();
        res.status(200).json(tarefas);
    } catch (error) {
        console.error('Erro ao listar tarefas:', error);
        res.status(500).json({ message: 'Erro interno do servidor ao listar tarefas.' });
    }
};

exports.updateTarefaStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body; // status deve ser boolean (true/false)

        if (status === undefined || typeof status !== 'boolean') {
            return res.status(400).json({ message: 'O status deve ser um valor booleano (true/false).' });
        }

        const success = await Tarefa.updateStatus(id, status);
        if (!success) {
            return res.status(404).json({ message: 'Tarefa não encontrada.' });
        }
        res.status(200).json({ message: 'Status da tarefa atualizado com sucesso.' });
    } catch (error) {
        console.error('Erro ao alterar status da tarefa:', error);
        res.status(500).json({ message: 'Erro interno do servidor ao alterar status da tarefa.' });
    }
};

exports.deleteTarefa = async (req, res) => {
    try {
        const { id } = req.params;
        const success = await Tarefa.delete(id);
        if (!success) {
            return res.status(404).json({ message: 'Tarefa não encontrada.' });
        }
        res.status(200).json({ message: 'Tarefa removida com sucesso.' });
    } catch (error) {
        console.error('Erro ao remover tarefa:', error);
        res.status(500).json({ message: 'Erro interno do servidor ao remover tarefa.' });
    }
};