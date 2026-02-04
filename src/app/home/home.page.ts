import { Component } from '@angular/core';
import { Vendas } from '../services/vendas';
import { async, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  pedido: any = null;
  mensagem:  '' | undefined;
  constructor(private api: Vendas) { 
  }

  ngOnInit() {
  }
  logout(){}  

  
  // async Listarpedidos() {
  //   // listar pedidos
  //   const pedidosLista = {
  //     requisicao: 'pedido-listar',
  //     id_pedido: 100055,
  //   } 
  //   // console.log(pedidosLista);

  //   const  resposta: any = await lastValueFrom(this.api.operacao(pedidosLista));
  //   this.mensagem = resposta.msg;
  //   this.pedido =  resposta.data[0];
  // }


}

