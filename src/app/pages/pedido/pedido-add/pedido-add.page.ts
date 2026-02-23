// import { Component, OnInit } from '@angular/core';
// import { Vendas } from 'src/app/services/vendas';
// import {Form, FormBuilder, FormGroup, Validators } from '@angular/forms';


// interface ItemCarrinho {
//   produto_id: number;
//   quantidade: number;
// }

// @Component({
//   selector: 'app-resumo-pedido',
//   templateUrl: './resumo-pedido.page.html',
//   styleUrls: ['./resumo-pedido.page.scss'],
// })
// export class ResumoPedidoPage implements OnInit {

//   carrinho: ItemCarrinho[] = [];
//   pedido: any = null;
//   api: any;
//   usuarios: any;

//   constructor(private pedidoAdd: Vendas) {}

//   ngOnInit() {
//     this.carrinho = [
//       { produto_id: 1, quantidade: 2 },
//       { produto_id: 3, quantidade: 1 }
//     ];
//   }

//   finalizarCompra() {

//     const dados = {
//       usuario_id: 1,
//       cliente_id: 10,
//       desconto: 0,
//       itens: this.carrinho
//     };

//     this.pedidoAdd.criarPedido(dados).subscribe({
//       next: (res: any) => {
//         console.log('Pedido criado:', res);
//         this.pedido = res;
//         this.carrinho = [];
//       },
//       error: (err: any) => {
//         console.error('Erro ao criar pedido:', err);
//       }
//     });
//   }

//   listar(id:number = 0) {
//     this.api.operacao({requisicao: 'pedido-listar'}).subscribe(
//       (res: any) => {
//         if (res.success) {
//           this.usuarios = res.data;
//         }
//       }
//     )
//   }

// }