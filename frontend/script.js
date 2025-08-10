document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addTodoBtn = document.getElementById('add-todo-btn');
    const todoList = document.getElementById('todo-list');

    // Replace this URL with the DNS name of your Application Load Balancer
    const apiUrl = 'http://YOUR_APP_LOAD_BALANCER_DNS/todos';

    // Fetch and display todos
    const fetchTodos = async () => {
        try {
            const response = await fetch(apiUrl);
            const todos = await response.json();
            todoList.innerHTML = '';
            todos.forEach(todo => {
                const li = document.createElement('li');
                li.innerHTML = `
                    <span class="${todo.completed ? 'completed' : ''}" data-id="${todo.id}">${todo.task}</span>
                    <button data-id="${todo.id}">Delete</button>
                `;
                todoList.appendChild(li);
            });
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    // Add a new todo
    const addTodo = async () => {
        const task = todoInput.value.trim();
        if (task === '') return;

        try {
            await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ task }),
            });
            todoInput.value = '';
            fetchTodos();
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    // Delete a todo
    const deleteTodo = async (id) => {
        try {
            await fetch(`${apiUrl}/${id}`, {
                method: 'DELETE',
            });
            fetchTodos();
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    // Toggle todo completion
    const toggleTodo = async (id, currentTask, currentStatus) => {
        try {
            await fetch(`${apiUrl}/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ task: currentTask, completed: !currentStatus }),
            });
            fetchTodos();
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };


    addTodoBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    todoList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const id = e.target.dataset.id;
            deleteTodo(id);
        } else if (e.target.tagName === 'SPAN') {
            const id = e.target.dataset.id;
            const taskText = e.target.textContent;
            const isCompleted = e.target.classList.contains('completed');
            toggleTodo(id, taskText, isCompleted);
        }
    });

    fetchTodos();
}); 