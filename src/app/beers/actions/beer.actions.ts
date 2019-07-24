import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { Beer } from '../../shared/beer';

export enum BeerActionTypes {
  LoadBeers = '[Beer] Load Beers',
  LoadBeersSuccess = '[Beer] Load Beers Success',
  LoadBeersFailure = '[Beer] Load Beers Failure',
  LoadBook = '[Beer] Load Beer',
  LoadBeersuccess = '[Beer] Load Beer Success',
  LoadBookFailure = '[Beer] Load Beer Failure',
  DeleteBook = '[Beer] Delete Beer',
  DeleteBookSuccess = '[Beer] Delete Beer Success',
}

export class LoadBeers implements Action {
  readonly type = BeerActionTypes.LoadBeers;
}

export class LoadBeersSuccess implements Action {
  readonly type = BeerActionTypes.LoadBeersSuccess;
  constructor(public payload: { books: Beer[] }) { }
}

export class LoadBeersFailure implements Action {
  readonly type = BeerActionTypes.LoadBeersFailure;
  constructor(public payload: { error: HttpErrorResponse }) { }
}

export class LoadBook implements Action {
  readonly type = BeerActionTypes.LoadBook;
  constructor(public payload: { isbn: string }) {}
}

export class LoadBeersuccess implements Action {
  readonly type = BeerActionTypes.LoadBeersuccess;
  constructor(public payload: { beer: Beer }) {}
}

export class LoadBookFailure implements Action {
  readonly type = BeerActionTypes.LoadBookFailure;
  constructor(public payload: { error: HttpErrorResponse }) {}
}


export type BookActions =
  | LoadBeers
  | LoadBeersSuccess
  | LoadBeersFailure
  | LoadBook
  | LoadBeersuccess
  | LoadBookFailure;
