-- script_criacao.sql
CREATE DATABASE IF NOT EXISTS todolist_db; [cite: 1]
USE todolist_db; [cite: 1]

CREATE TABLE IF NOT EXISTS tarefas ( [cite: 6]
    id INT PRIMARY KEY AUTO_INCREMENT, [cite: 6]
    descricao VARCHAR(255) NOT NULL, [cite: 6]
    status BOOLEAN DEFAULT FALSE, -- FALSE = pendente, TRUE = concluído 
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP [cite: 7]
);