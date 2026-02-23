import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendas } from 'src/app/services/vendas';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.page.html',
  styleUrls: ['./produto-list.page.scss'],
  standalone: false
})
export class ProdutoListPage implements OnInit {

  produtos: any[] = [];
  start: number = 0; // controla o inicio da busca
  limit: number = 20; // quantidade de item por pagina
  palavra: any;

  constructor(private api: Vendas, private router: Router) { }

  ngOnInit() {
    this.listar();

  }
  listar(event?: any, atualizar: boolean = false) {
    // se for um refresh, a gente reseta o contador e a lista
    if (atualizar) {
      this.start = 0;
      this.produtos = [];
    }
    this.api.operacao({
      requisicao: 'produto-listar',
      start: this.start,
      limit: this.limit,
      nom: this.palavra
    })
      .subscribe((retornoDaApi: any) => {
        if (retornoDaApi.success) {
          this.produtos = retornoDaApi.data;
          // aqui a gente acrescenta os novos itens aos existentes
          this.produtos = [...this.produtos, ...retornoDaApi.data];

          // por fim incrementa o start para o próximo carregamento
          this.start += this.limit; // start inicia com zero, depois vai para 20, 40, 60 e assim por diante
        }
        // finaliza a animação do componente que disparou a ação
        event?.target?.complete();

        // desativar o infinite scrool 
        if (retornoDaApi.data.length < this.limit && event?.target?.disabled !== undefined) {
          event.target.disabled = true;
          // opcional: colocar a mensagem... toast
        }
      });
  }
  // puxar para atualizar (reseta a list)
  atualizar(event: any) {
    this.listar(event, true);
  }
  // scrool infinito(carrega mais)
  carregarMais(event: any) {
    this.listar(event);
  }

  abrirDetalhes(id: number) {
    this.router.navigate(['/produto-detalhe', id]);
  }
  abrir(id: number) {
    this.router.navigate(['/produto-imagem', id]);
  }
}
