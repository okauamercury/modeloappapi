import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Vendas {
  private url = 'https://10.91.47.129/modeloappapi';
  constructor(private http: HttpClient) {}

  //saida para o primeiro enmdpoint
  operacao(dados:any){
    return this.http.post(`${this.url}/api.php`, dados);
  }
  
}
