import { Component, OnInit } from '@angular/core';
import {Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Vendas } from 'src/app/services/vendas.service';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.page.html',
  styleUrls: ['./cliente-add.page.scss'],
  standalone: false,
})
export class ClienteAddPage implements OnInit {
  form!: any;

  constructor(
    private formBuilder: FormBuilder,
    private api: Vendas,
    private toast: ToastController
  ) { }

  ngOnInit() { // quando a pagina for carregada o form é inicializado
    //ngOnInit é parte do ciclo de vida do APP Ionic
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],  
      email: ['', Validators.email],
      datanasc: ['', Validators.required]
    });
  }

  salvar() {
    const request = {
      requisicao: 'cliente-add',
      ...this.form.value
    };
    this.api.operacao(request).subscribe((res: any) => {
      this.mensagem(res.msg); // exibir a mensagem que retornou da api
      if (res.success) {
        this.form.reset();
      }
    });;
  }
  async mensagem(msg: string) {
    const t = await this.toast.create({
      message: msg,
      duration: 2000,
    });
    t.present();
  }
}
