// backend/src/config/db.js
const mysql = require('mysql2/promise'); // Usar a versão de promessas para async/await
require('dotenv').config({ path: '../../.env' }); // Caminho relativo para o .env

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log('Conectado ao MySQL com sucesso!');
        connection.release(); // Libera a conexão
    } catch (error) {
        console.error('Erro ao conectar ao MySQL:', error.message);
        process.exit(1); // Encerra o processo se a conexão falhar
    }
}

testConnection(); // Testa a conexão ao iniciar o módulo

module.exports = pool;