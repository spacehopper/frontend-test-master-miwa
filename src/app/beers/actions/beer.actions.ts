import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { Beer } from '../../shared/beer';

export enum BeerActionTypes {
  LoadBeers = '[Beer] Load Beers',
  LoadBeersSuccess = '[Beer] Load Beers Success',
  LoadBeersFailure = '[Beer] Load Beers Failure',
  LoadBeer = '[Beer] Load Beer',
  LoadBeersuccess = '[Beer] Load Beer Success',
  LoadBeerFailure = '[Beer] Load Beer Failure'
}

export class LoadBeers implements Action {
  readonly type = BeerActionTypes.LoadBeers;
}

export class LoadBeersSuccess implements Action {
  readonly type = BeerActionTypes.LoadBeersSuccess;
  constructor(public payload: { beers: Beer[] }) { }
}

export class LoadBeersFailure implements Action {
  readonly type = BeerActionTypes.LoadBeersFailure;
  constructor(public payload: { error: HttpErrorResponse }) { }
}

export class LoadBeer implements Action {
  readonly type = BeerActionTypes.LoadBeer;
  constructor(public payload: { isbn: string }) {}
}

export class LoadBeersuccess implements Action {
  readonly type = BeerActionTypes.LoadBeersuccess;
  constructor(public payload: { beer: Beer }) {}
}

export class LoadBeerFailure implements Action {
  readonly type = BeerActionTypes.LoadBeerFailure;
  constructor(public payload: { error: HttpErrorResponse }) {}
}


export type BeerActions =
  | LoadBeers
  | LoadBeersSuccess
  | LoadBeersFailure
  | LoadBeer
  | LoadBeersuccess
  | LoadBeerFailure;
