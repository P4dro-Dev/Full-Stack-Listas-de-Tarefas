// backend/src/models/Tarefa.js
const db = require('../config/db');

class Tarefa {
    static async create(descricao) {
        const [result] = await db.execute(
            'INSERT INTO tarefas (descricao) VALUES (?)',
            [descricao]
        );
        return { id: result.insertId, descricao, status: false, data_criacao: new Date() };
    }

    static async findAll() {
        const [rows] = await db.execute('SELECT * FROM tarefas ORDER BY data_criacao DESC');
        return rows;
    }

    static async updateStatus(id, status) {
        const [result] = await db.execute(
            'UPDATE tarefas SET status = ? WHERE id = ?',
            [status, id]
        );
        return result.affectedRows > 0;
    }

    static async delete(id) {
        const [result] = await db.execute(
            'DELETE FROM tarefas WHERE id = ?',
            [id]
        );
        return result.affectedRows > 0;
    }
}

module.exports = Tarefa;