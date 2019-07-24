import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State as BookState } from '../reducers/beer.reducer';

export const getBookState = createFeatureSelector<BookState>('beer');

export const getBooksLoading = createSelector(
  getBookState,
  state => state.loading
);

export const getAllBeers = createSelector(
  getBookState,
  state => state.books
);

export const getBeerById = createSelector(
  getAllBeers,
  (books, props) => books.find(b => b.id === props.id)
);

