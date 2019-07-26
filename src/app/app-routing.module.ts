import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BeerGravityComponent } from './beers/beer-gravity/beer-gravity.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'beers',
    loadChildren: () => import('./beers/beers.module').then(m => m.BeersModule)
  }
  ,
  {
    path: 'beers/details/:id',
    component: BeerGravityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
