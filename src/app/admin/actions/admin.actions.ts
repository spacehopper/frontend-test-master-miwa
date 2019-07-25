import { Action } from '@ngrx/store';
import { Beer } from '../../shared/beer';

export enum AdminActionTypes {
  UpdateBeer = '[Admin] Update Beer',
  UpdateBeerSuccess = '[Admin] Update Beer Success'
}

export class UpdateBeer implements Action {
  readonly type = AdminActionTypes.UpdateBeer;
  constructor(public payload: { beer: Beer }) {}
}

export class UpdateBeerSuccess implements Action {
  readonly type = AdminActionTypes.UpdateBeerSuccess;
  constructor(public payload: { beer: Beer }) {}
}

export type AdminActions =
  | UpdateBeer
  | UpdateBeerSuccess;
