// frontend/script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const messageDiv = document.getElementById('message');

    const API_URL = 'http://localhost:3001/tarefas'; // URL do backend 

    // Função para mostrar mensagens (sucesso ou erro)
    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = `message ${type}`;
        messageDiv.style.display = 'block';
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 3000);
    }

    // Função para carregar e exibir as tarefas 
    async function fetchTasks() {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error('Erro ao carregar tarefas.');
            }
            const tasks = await response.json();
            taskList.innerHTML = ''; // Limpa a lista existente
            if (tasks.length === 0) {
                taskList.innerHTML = '<li style="text-align: center; color: #666;">Nenhuma tarefa cadastrada.</li>';
                return;
            }
            tasks.forEach(task => {
                const li = document.createElement('li');
                li.className = `task-item ${task.status ? 'completed' : ''}`;
                li.dataset.id = task.id;

                const descriptionSpan = document.createElement('span');
                descriptionSpan.className = 'task-description';
                descriptionSpan.textContent = task.descricao;
                li.appendChild(descriptionSpan);

                const actionsDiv = document.createElement('div');
                actionsDiv.className = 'task-actions';

                // Botão para marcar/desmarcar como concluída 
                const toggleStatusBtn = document.createElement('button');
                toggleStatusBtn.textContent = task.status ? 'Marcar como Pendente' : 'Marcar como Concluída';
                toggleStatusBtn.onclick = () => toggleTaskStatus(task.id, !task.status);
                actionsDiv.appendChild(toggleStatusBtn);

                // Botão para remover tarefa 
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Remover';
                deleteBtn.className = 'delete-btn';
                deleteBtn.onclick = () => deleteTask(task.id);
                actionsDiv.appendChild(deleteBtn);

                li.appendChild(actionsDiv);
                taskList.appendChild(li);
            });
        } catch (error) {
            console.error('Erro ao buscar tarefas:', error);
            showMessage(`Erro: ${error.message}`, 'error');
        }
    }

    // Função para adicionar uma nova tarefa 
    addTaskBtn.addEventListener('click', async () => {
        const descricao = taskInput.value.trim();
        if (descricao === '') {
            showMessage('A descrição da tarefa não pode estar vazia.', 'error');
            return;
        }

        try {
            const response = await fetch(API_URL, {
                method: 'POST', // POST /tarefas 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ descricao })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Erro ao adicionar tarefa.');
            }

            taskInput.value = ''; // Limpa o input
            showMessage('Tarefa adicionada com sucesso!', 'success');
            fetchTasks(); // Recarrega a lista
        } catch (error) {
            console.error('Erro ao adicionar tarefa:', error);
            showMessage(`Erro: ${error.message}`, 'error');
        }
    });

    // Função para alterar o status da tarefa 
    async function toggleTaskStatus(id, newStatus) {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT', // PUT /tarefas/:id 
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status: newStatus })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Erro ao atualizar status.');
            }

            showMessage('Status da tarefa atualizado!', 'success');
            fetchTasks(); // Recarrega a lista
        } catch (error) {
            console.error('Erro ao atualizar status:', error);
            showMessage(`Erro: ${error.message}`, 'error');
        }
    }

    // Função para remover tarefa 
    async function deleteTask(id) {
        if (!confirm('Tem certeza que deseja remover esta tarefa?')) {
            return;
        }
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE' // DELETE /tarefas/:id 
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Erro ao remover tarefa.');
            }

            showMessage('Tarefa removida com sucesso!', 'success');
            fetchTasks(); // Recarrega a lista
        } catch (error) {
            console.error('Erro ao remover tarefa:', error);
            showMessage(`Erro: ${error.message}`, 'error');
        }
    }

    // Carregar tarefas na inicialização
    fetchTasks();
});