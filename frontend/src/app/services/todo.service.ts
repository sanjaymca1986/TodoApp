import { TodoModel } from './../model/todo.model';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: Http) { }

  getTodos():  Promise<TodoModel[]> {
    return this.http.get(this.baseUrl + '/api/todos/')
      .toPromise()
      .then(response => response.json() as TodoModel[])
      .catch(this.handleError);
  }

  createTodo(todoData: TodoModel): Promise<TodoModel> {
    return this.http.post(this.baseUrl + '/api/todos/', todoData)
      .toPromise().then(response => response.json() as TodoModel)
      .catch(this.handleError);
  }

  updateTodo(todoData: TodoModel): Promise<TodoModel> {
    return this.http.put(this.baseUrl + '/api/todos/' + todoData.id, todoData)
      .toPromise()
      .then(response => response.json() as TodoModel)
      .catch(this.handleError);
  }

  deleteTodo(id: string): Promise<any> {
    return this.http.delete(this.baseUrl + '/api/todos/' + id)
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}
