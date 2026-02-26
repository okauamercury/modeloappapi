import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Vendas } from 'src/app/services/vendas.service';

@Component({
  selector: 'app-usuario-add',
  templateUrl: './usuario-add.page.html',
  styleUrls: ['./usuario-add.page.scss'],
  standalone: false,
})
export class UsuarioAddPage implements OnInit {

  form!: FormGroup;
  niveis:any[]=[];

  constructor(
    private formBuilder: FormBuilder,
    private api: Vendas,
    private toast: ToastController
  ) { }

  ngOnInit() { // quando a pagina for carregada o form é inicializado
    //ngOnInit é parte do ciclo de vida do APP Ionic
    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      senha: ['', Validators.required],
      id_nivel: ['', Validators.required],
    });
    // carregar níveis
    this.listarNiveis();
  }

  salvar() {
    const request = {
      requisicao: 'usuario-add',
      ...this.form.value
    };
    this.api.operacao(request).subscribe((res: any) => {
      this.mensagem(res.msg); // exibir a mensagem que retornou da api
      if(res.success){
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
  listarNiveis(){
    this.api.operacao({
      requisicao: 'nivel-listar'
    }).subscribe((res:any)=>{
      if(res.success){
        this.niveis = res.data;
      }
    });
  }
}
