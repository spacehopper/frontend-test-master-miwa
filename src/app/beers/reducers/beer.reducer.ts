import { BookActions, BeerActionTypes } from '../actions/book.actions';

import { Beer } from '../../shared/beer';

export interface State {
  books: Beer[];
  loading: boolean;
}

export const initialState: State = {
  books: [],
  loading: false
};

export function reducer(state = initialState, action: BookActions): State {
  console.log("action.type: "+action.type);

  switch (action.type) {

    case BeerActionTypes.LoadBeers: {
      return {
        ...state,
        loading: true
      };
    }

    case BeerActionTypes.LoadBeersSuccess: {
      return {
        ...state,
        books: action.payload.books,
        loading: false
      };
    }

    case BeerActionTypes.LoadBeersuccess: {
      const { book } = action.payload;
      const books = [
        ...state.books.filter(b => b.id !== book.id),
        book
      ];

      return {
        ...state,
        books
      };
    }


    default:
      return state;
  }
}
