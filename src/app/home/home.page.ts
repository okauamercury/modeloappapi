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

  constructor(private api: Vendas) {
    this.Listarpedidos();
  }

  async Listarpedidos() {
    // listar pedidos
    const pedidosLista = {
      requisicao: 'pedido-listar'
    }
    console.log(pedidosLista);

    const  resposta: any = await lastValueFrom(this.api.operacao(pedidosLista));
    const pedidos =  resposta.data;

    console.log(pedidos);
  }


}

