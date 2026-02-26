import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendas } from 'src/app/services/vendas.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.page.html',
  styleUrls: ['./cliente-list.page.scss'],
  standalone: false
})
export class ClienteListPage implements OnInit {
  [x: string]: any;

  clientes: any[] = [];
  constructor(private api: Vendas, private router: Router) { }

  ngOnInit() {
    this.listar();
  }

  ionViewWillEnter() {
    this.listar();
    console.log(this.clientes);
  }

  listar(id: number = 0) {
    this.api.operacao({ requisicao: 'cliente-listar' }).subscribe(
      (res: any) => {
        if (res.success) {
          this.clientes = res.data;
        }
      }
    )
  }
  editar(id: number) {
    this.router.navigate(['/cliente-edit', id])
  }
  excluir(id: number) {
    this.api.operacao({ requisicao: 'cliente-excluir', id }).subscribe(
      (res: any) => {
        if (res.success) {
          this.listar();
        }
      }
    )
  }
}
