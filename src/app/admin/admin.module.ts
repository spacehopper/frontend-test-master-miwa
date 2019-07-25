import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DateValueAccessorModule } from 'angular-date-value-accessor';

import { AdminRoutingModule } from './admin-routing.module';
import { EditBeerComponent } from './edit-beer/edit-beer.component';
import { StoreModule } from '@ngrx/store';
import * as fromAdmin from './reducers/admin.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from './effects/admin.effects';
import { BeerFormComponent } from './beer-form/beer-form.component';


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
    EditBeerComponent
  ]
})
export class AdminModule { }
