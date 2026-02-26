import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { DashboardionicPage } from './dashboardionic.page';
import { HttpClientModule } from '@angular/common/http';

imports: [
  HttpClientModule
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardionicPage
      }
    ])
  ],
  declarations: [DashboardionicPage]
})
export class DashboardionicPageModule { }