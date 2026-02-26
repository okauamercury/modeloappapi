import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardionicPage } from './dashboardionic.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardionicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardionicPageRoutingModule {}
