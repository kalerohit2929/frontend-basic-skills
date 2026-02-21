// Global variables
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const emptyMessage = document.getElementById('empty-message');
const STORAGE_KEY = 'javascript-todos';

// --- Local Storage Functions ---

// 1. Load tasks from local storage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    tasks.forEach(task => {
        addTaskToDOM(task.text, task.completed);
    });
    updateEmptyMessage();
}

// 2. Save tasks to local storage
function saveTasks() {
    const tasks = [];
    todoList.querySelectorAll('li').forEach(li => {
        tasks.push({
            text: li.querySelector('.task-text').textContent,
            completed: li.classList.contains('completed')
        });
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    updateEmptyMessage();
}

// --- DOM Manipulation Functions ---

// 3. Create the HTML element for a new task
function addTaskToDOM(taskText, isCompleted = false) {
    const li = document.createElement('li');
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-button" aria-label="Delete task">
            <i class="fas fa-trash"></i>
        </button>
    `;

    if (isCompleted) {
        li.classList.add('completed');
    }

    // Event listener for toggling completion (click on the LI)
    li.querySelector('.task-text').addEventListener('click', function() {
        li.classList.toggle('completed');
        saveTasks();
    });

    // Event listener for deleting the task
    li.querySelector('.delete-button').addEventListener('click', function(e) {
        e.stopPropagation(); // Prevents li from toggling completion
        li.remove();
        saveTasks();
    });

    todoList.appendChild(li);
}

// 4. Update the "No tasks" message visibility
function updateEmptyMessage() {
    if (todoList.children.length === 0) {
        emptyMessage.style.display = 'block';
    } else {
        emptyMessage.style.display = 'none';
    }
}


// --- Event Listeners ---

// 5. Handle form submission (adding a new task)
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop the page from reloading
    
    const taskText = input.value.trim();
    
    // Simple Validation: Check if the input is not empty
    if (taskText !== '') {
        addTaskToDOM(taskText);
        saveTasks();
        input.value = ''; // Clear the input field
    } else {
        alert('Please enter a task before adding.');
    }
});


// --- Initial Setup ---
// Load any saved tasks when the page first loads
document.addEventListener('DOMContentLoaded', loadTasks);