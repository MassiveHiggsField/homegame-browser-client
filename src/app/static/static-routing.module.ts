import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'features', component: FeaturesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule { }
