import { Action } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { Beer } from '../../shared/beer';

export enum BeerActionTypes {
  LoadBeers = '[Book] Load Books',
  LoadBeersSuccess = '[Book] Load Books Success',
  LoadBeersFailure = '[Book] Load Books Failure',
  LoadBook = '[Book] Load Book',
  LoadBeersuccess = '[Book] Load Book Success',
  LoadBookFailure = '[Book] Load Book Failure',
  DeleteBook = '[Book] Delete Book',
  DeleteBookSuccess = '[Book] Delete Book Success',
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
  constructor(public payload: { book: Beer }) {}
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
