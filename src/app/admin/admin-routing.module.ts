import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeerGravityComponent } from '../beers/beer-gravity/beer-gravity.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full'
  },
  {
    path: 'edit/:id',
    component: BeerGravityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdminRoutingModule { }
