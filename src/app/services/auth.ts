import { Injectable } from '@angular/core';
import { Vendas } from './vendas'; //

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private api:Vendas){}
   dados: any = null;


  login(email:string, senha:string){
    return this.api.operacao({
      requisicao : 'login',
      email,
      senha 
    });
  }

  logout(){
    localStorage.setItem('usuario', JSON.stringify(this.dados));
  }

  setUsuario(dados:any){
    return JSON.parse( localStorage.getItem('usuario') || 'null');
  }

  getUsuario():boolean {
    return !!this.getUsuario();
  }

  isLogado():boolean{
    return true;
  }
}
