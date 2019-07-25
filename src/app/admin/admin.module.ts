import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DateValueAccessorModule } from 'angular-date-value-accessor';

import { AdminRoutingModule } from './admin-routing.module';
import { BeerGravityComponent } from '../beers/beer-gravity/beer-gravity.component';
import { StoreModule } from '@ngrx/store';
import * as fromAdmin from './reducers/admin.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from './effects/admin.effects';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    DateValueAccessorModule,
    StoreModule.forFeature('admin', fromAdmin.reducer),
    EffectsModule.forFeature([AdminEffects])
  ],
  declarations: [
    BeerGravityComponent
  ]
})
export class AdminModule { }
