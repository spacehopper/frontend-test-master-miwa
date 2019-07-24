    import { DelayDirective } from './shared/delay.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeersRoutingModule } from './beers-routing.module';

import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerListItemComponent } from './beer-list-item/beer-list-item.component';
import { BeerDetailsComponent } from "./beer-details/beer-details.component";
import { ZoomDirective } from './shared/zoom.directive';
import { StoreModule } from '@ngrx/store';
import * as fromBook from './reducers/beer.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BeerEffects } from './effects/beer.effects';

@NgModule({
  imports: [
    CommonModule,
    BeersRoutingModule,
    StoreModule.forFeature('book', fromBook.reducer),
    EffectsModule.forFeature([BeerEffects])
  ],
  declarations: [
    BeerListComponent,
    BeerListItemComponent,
    BeerDetailsComponent,
    ZoomDirective,
    DelayDirective
  ]
})
export class BeersModule { }
