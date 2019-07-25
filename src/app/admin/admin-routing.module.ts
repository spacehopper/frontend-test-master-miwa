import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditBeerComponent } from './edit-beer/edit-beer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full'
  },
  {
    path: 'edit/:id',
    component: EditBeerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdminRoutingModule { }
