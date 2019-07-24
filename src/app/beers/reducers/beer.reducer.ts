import { BookActions, BeerActionTypes } from '../actions/beer.actions';

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
      const { beer } = action.payload;
      const books = [
        ...state.books.filter(b => b.id !== beer.id),
        beer
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
