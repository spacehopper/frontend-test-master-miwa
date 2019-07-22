import { BookActions, BookActionTypes } from '../actions/book.actions';

import { Book } from '../../shared/book';
import { AdminActionTypes, AdminActions } from '../../admin/actions/admin.actions';

export interface State {
  books: Book[];
  loading: boolean;
}

export const initialState: State = {
  books: [],
  loading: false
};

export function reducer(state = initialState, action: BookActions | AdminActions): State {
  console.log("action.type: "+action.type);

  switch (action.type) {

    case BookActionTypes.LoadBooks: {
      return {
        ...state,
        loading: true
      };
    }

    case BookActionTypes.LoadBooksSuccess: {
      return {
        ...state,
        books: action.payload.books,
        loading: false
      };
    }

    case BookActionTypes.LoadBookSuccess: {
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

    case BookActionTypes.DeleteBookSuccess: {
      return {
        ...state,
        books: state.books.filter(
          b => b.id !== action.payload.id
        )
      };
    }

    case AdminActionTypes.CreateBookSuccess: {
      const { book } = action.payload;
      const books = [...state.books, book];

      return { ...state, books };
    }

    case AdminActionTypes.UpdateBookSuccess: {
      const { book } = action.payload;
      const books = state.books.map(b => b.id === book.id ? book : b);

      return { ...state, books };
    }

    default:
      return state;
  }
}
