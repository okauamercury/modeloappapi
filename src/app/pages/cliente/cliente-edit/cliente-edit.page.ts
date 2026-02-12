// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { ToastController } from '@ionic/angular';
// import { Vendas } from 'src/app/services/vendas';

// @Component({
//   selector: 'app-cliente-edit',
//   templateUrl: './cliente-edit.page.html',
//   styleUrls: ['./cliente-edit.page.scss'],
//   standalone: false
// })
// export class UsuarioEditPage implements OnInit {
//   form!: FormGroup;
//   id!: number;

//   constructor(
//     private route: ActivatedRoute,
//     private fb: FormBuilder,
//     private api: Vendas,
//     private router: Router,
//     private toast: ToastController
//   ) { }


//   ngOnInit() {
//     // recuperano o id que veio pela rota
//     this.id = Number(this.route.snapshot.paramMap.get('id'));
//     this.form = this.fb.group({
//       nome: ['', Validators.required],
//       telefone: ['', Validators.required],
//       data_nasc: ['', Validators.required],
//       data_cad: ['', Validators.required]
//     });
//     this.carregar();
//   }
//   carregar() {
//     this.api.operacao({
//       requisicao: 'cliente-list',
//       id_usuario: this.id
//     }).subscribe((res: any) => {
//       if (res.success) {
//         this.form.patchValue({
//           nome: res.data.nome,
//           nivel: res.data.nivel_id
//         })
//       }
//     });
//   }
//   // final do método carregar
//   salvar() {
//     const request = {
//       requisicao: 'cliente-editar',
//       id_usuario: this.id,
//       ...this.form.value
//     }
//     this.api.operacao(request).subscribe((res:any)=>{
//       this.mensagem(res.msg);
//       this.router.navigateByUrl('/cliente-list')
//     })
//   }
//   async mensagem(msg:string){
//     const t = await this.toast.create({
//       message: msg,
//       duration: 2000 // 2 segundos de duranção
//     });
//   }

// }


