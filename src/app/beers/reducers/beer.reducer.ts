import { BeerActions, BeerActionTypes } from '../actions/beer.actions';

import { Beer } from '../../shared/beer';

export interface State {
  beers: Beer[];
  loading: boolean;
}

export const initialState: State = {
  beers: [],
  loading: false
};

export function reducer(state = initialState, action: BeerActions): State {
  
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
        beers: action.payload.beers,
        loading: false
      };
    }

    case BeerActionTypes.LoadBeersuccess: {
      const { beer } = action.payload;
      const beers = [
        ...state.beers.filter(b => b.id !== beer.id),
        beer
      ];

      return {
        ...state,
        beers
      };
    }


    default:
      return state;
  }
}
