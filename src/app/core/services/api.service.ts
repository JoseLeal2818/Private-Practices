import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api } from '../models/api';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  url = 'https://jsonplaceholder.typicode.com/todos'

  constructor(
    private http: HttpClient
  ) { }

  getData() {
    let header = new HttpHeaders()
      .set('Type-content', 'aplication/json')

    return this.http.get(this.url, {
      headers: header
    });
  }



  // getAllTasks(){
  //   const path = 'https://jsonplaceholder.typicode.com/todos';
  //   return this.http.get<Api[]>(path);
  // }

  // getTasks(id: string){
  //   const path = `https://jsonplaceholder.typicode.com/todos/${id}`;
  //   return this.http.get<Api[]>(path);
  // }

  // createTask(api: Api){
  //   const path = `https://jsonplaceholder.typicode.com/todos`;
  //   return this.http.post(path, api);
  // }
}
