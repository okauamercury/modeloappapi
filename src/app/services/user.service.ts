import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  operacao: any;
  getUsers(p0: { requisicao: string; }) {
    throw new Error('Method not implemented.');
  }

  // private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // constructor(private http: HttpClient) {}

  // getUsers() {
  //   return this.http.get<any[]>(this.apiUrl);
  // }
  
}