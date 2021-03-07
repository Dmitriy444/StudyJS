window.addEventListener('DOMContentLoaded', function(){
'use strict';

class Todo {
    constructor(form, input, todoList, todoCompleted, container) {
        this.form = document.querySelector(form);
        this.input = document.querySelector(input);
        this.todoList = document.querySelector(todoList);
        this.todoCompleted = document.querySelector(todoCompleted);
        this.container = document.querySelector(container);
        this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));
    }

    addToStorage(){
        localStorage.setItem('toDoList', JSON.stringify([...this.todoData]));
    }

    render(){
        this.todoList.textContent = '';
        this.todoCompleted.textContent = '';
        this.todoData.forEach(this.createItem, this);
        this.addToStorage();
    }

    createItem(todo){
        const li = document.createElement('li');
        li.key = todo.key;
        li.classList.add('todo-item');
        li.insertAdjacentHTML('beforeend', `
        <span class="text-todo">${todo.value}</span>
        <div class="todo-buttons">
            <button class="todo-remove"></button>
            <button class="todo-complete"></button>
        </div>
        `);

        if(todo.completed){
            this.todoCompleted.append(li);
        } else {
            this.todoList.append(li);
        }
    }

    addTodo(e) {
        e.preventDefault();

        if(this.input.value.trim()) {
        const newTodo = {
            value: this.input.value,
            completed: false,
            key: this.generateKey(),
        };
        this.todoData.set(newTodo.key, newTodo);
        } else if (this.input.value == ''){
            alert('Напишите цель.');
        }
        this.input.value = '';
        this.render();
    }
    
    generateKey() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    deleteItem(elem){
        this.todoData.forEach((item, index) => {
            if(item.key === elem.key){
                console.log(this.todoData.has(index));
                    this.todoData.delete(index);
            } 
        });
        this.render();
    }

    completedItem(elem){
        this.todoData.forEach((item) => {
            if(item.key === elem.key){
                item.completed = !item.completed;
            }
            });
        this.render();
    }
    
    handler(){ 
        this.container.addEventListener('click', (event) => {
            let target = event.target;

            if(target.classList.contains('todo-remove')){
                this.deleteItem(target.closest('li'));
            } else if(target.classList.contains('todo-complete')){  
                this.completedItem(target.closest('li'));
            }  
        }
        );
    }

    init() {
        this.form.addEventListener('submit', this.addTodo.bind(this));
        this.render();
        this.handler();
    }
}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed', '.todo-container');

todo.init();
});