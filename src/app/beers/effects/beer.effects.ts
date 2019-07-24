import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  BeerActionTypes,
  BookActions,
  LoadBeersSuccess,
  LoadBeersFailure,
  LoadBeersuccess,
  LoadBookFailure
} from '../actions/beer.actions';
import { BeerStoreService } from 'src/app/shared/beer-store.service';

@Injectable()
export class BeerEffects {

  @Effect()
  LoadBeers$ = this.actions$.pipe(
    ofType(BeerActionTypes.LoadBeers),
    switchMap(() =>
      this.bs.getAll().pipe(
        map(books => new LoadBeersSuccess({ books })),
        catchError(error => of(new LoadBeersFailure({ error }))))
    )
  );

  @Effect()
  loadBook$ = this.actions$.pipe(
    ofType(BeerActionTypes.LoadBook),
    map(action => action.payload.isbn),
    mergeMap(id => this.bs.getSingle(id).pipe(
      map(beer => new LoadBeersuccess({ beer })),
      catchError(error => of(new LoadBookFailure({ error })))
    ))
  );


  constructor(
    private actions$: Actions<BookActions>,
    private bs: BeerStoreService,
    private router: Router
  ) {}

}
