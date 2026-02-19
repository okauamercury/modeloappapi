import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Vendas {
  private url = 'http://sublimegrace.com.br/modeloappapi';
  constructor( private http: HttpClient) {}

  //saida para o primeiro enmdpoint
  operacao(dados:any){
    return this.http.post(`${this.url}/api.php`, dados);
  }
  
  //upload imagem

  uploadImagem(idProduto:number, arquivo:File){
    const formData = new FormData();
    formData.append('requisicao', 'produto-upload-imagem');
    formData.append('id_produto', idProduto.toString());
    formData.append('imagem', arquivo)

    return this.http.post(this.url + '/api.php', formData);
  }
}
