import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeerListComponent } from './beer-list/beer-list.component';
import {BeerDetailsComponent} from "./beer-details/beer-details.component";
const routes: Routes = [
  {
    path: '',
    component: BeerListComponent
  },
  {
    path: ':id',
    component: BeerDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BeersRoutingModule { }
