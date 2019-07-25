import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State as BeerState } from '../reducers/beer.reducer';

export const getBeerState = createFeatureSelector<BeerState>('beer');

export const getBeersLoading = createSelector(
  getBeerState,
  state => state.loading
);

export const getAllBeers = createSelector(
  getBeerState,
  state => state.beers
);

export const getBeerById = createSelector(
  getAllBeers,
  (beers, props) => beers.find(b => b.id === props.id)
);

