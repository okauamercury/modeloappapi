import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedidoAddPageRoutingModule } from './pedido-add-routing.module';

import { PedidoAddPage } from './pedido-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedidoAddPageRoutingModule
  ],
  declarations: [PedidoAddPage]
})
export class PedidoAddPageModule {}
