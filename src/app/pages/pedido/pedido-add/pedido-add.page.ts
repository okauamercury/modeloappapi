import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pedido-add',
  templateUrl: './pedido-add.page.html',
  styleUrls: ['./pedido-add.page.scss'],
  standalone: false
})
export class PedidoAddPage implements OnInit {


  constructor(private alertController: AlertController) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  async excluirPedido() {
    const alert = await this.alertController.create({
      header: 'Atenção',
      message: 'Pedido excluído com sucesso!',
      buttons: ['OK']
    });

    await alert.present();
  }
  async salvarPedido() {
    const alert = await this.alertController.create({
      header: 'Atenção',
      message: 'Pedido salvo com sucesso!',
      buttons: ['OK']
    }); 
  }
}


