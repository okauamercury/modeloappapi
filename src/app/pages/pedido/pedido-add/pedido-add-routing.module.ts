import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedidoAddPage } from './pedido-add.page';

const routes: Routes = [
  {
    path: '',
    component: PedidoAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoAddPageRoutingModule {}
