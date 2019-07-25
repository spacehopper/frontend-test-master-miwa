import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  BeerActionTypes,
  BeerActions,
  LoadBeersSuccess,
  LoadBeersFailure,
  LoadBeersuccess,
  LoadBeerFailure
} from '../actions/beer.actions';
import { BeerStoreService } from 'src/app/shared/beer-store.service';

@Injectable()
export class BeerEffects {

  @Effect()
  LoadBeers$ = this.actions$.pipe(
    ofType(BeerActionTypes.LoadBeers),
    switchMap(() =>
      this.bs.getAll().pipe(
        map(beers => new LoadBeersSuccess({ beers })),
        catchError(error => of(new LoadBeersFailure({ error }))))
    )
  );

  @Effect()
  loadBeer$ = this.actions$.pipe(
    ofType(BeerActionTypes.LoadBeer),
    map(action => action.payload.isbn),
    mergeMap(id => this.bs.getSingle(id).pipe(
      map(beer => new LoadBeersuccess({ beer })),
      catchError(error => of(new LoadBeerFailure({ error })))
    ))
  );


  constructor(
    private actions$: Actions<BeerActions>,
    private bs: BeerStoreService,
    private router: Router
  ) {}

}
