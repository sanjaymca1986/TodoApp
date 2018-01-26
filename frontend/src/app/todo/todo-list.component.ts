import { TodoService } from './../services/todo.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoModel } from 'app/model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})

export class TodoListComponent implements OnInit {
  todos: TodoModel[];
  newTodo: TodoModel = new TodoModel();
  editing = false;
  editingTodo: TodoModel = new TodoModel();

  constructor(
    private todoService: TodoService,
  ) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos()
      .then(todos => this.todos = todos);
  }

  createTodo(todoForm: NgForm): void {
    this.todoService.createTodo(this.newTodo)
      .then(createTodo => {
        todoForm.reset();
        this.newTodo = new TodoModel();
        this.todos.unshift(createTodo)
      });
  }

  deleteTodo(id: string): void {
    this.todoService.deleteTodo(id)
      .then(() => {
        this.todos = this.todos.filter(todo => todo.id !== id);
      });
  }

  updateTodo(todoData: TodoModel): void {
    this.todoService.updateTodo(todoData)
      .then(updatedTodo => {
        const existingTodo = this.todos.find(todo => todo.id === updatedTodo.id);
        Object.assign(existingTodo, updatedTodo);
        this.clearEditing();
      });
  }

  toggleCompleted(todoData: TodoModel): void {
    todoData.completed = !todoData.completed;
    this.todoService.updateTodo(todoData)
      .then(updatedTodo => {
        const existingTodo = this.todos.find(todo => todo.id === updatedTodo.id);
        Object.assign(existingTodo, updatedTodo);
      });
  }

  editTodo(todoData: TodoModel): void {
    this.editing = true;
    Object.assign(this.editingTodo, todoData);
  }

  clearEditing(): void {
    this.editingTodo = new TodoModel();
    this.editing = false;
  }
}
