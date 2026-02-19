import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Vendas {
  private url = 'http://sh00196.teste.website/~well7877/modelo-api';
  constructor( private http: HttpClient) {}

  //saida para o primeiro enmdpoint
  operacao(dados:any){
    return this.http.post(`${this.url}/api.php`, dados);
  }
  
}
