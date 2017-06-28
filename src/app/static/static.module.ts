import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared';

import { StaticRoutingModule } from './static-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StaticRoutingModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class StaticModule { }
