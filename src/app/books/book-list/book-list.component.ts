import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, tap, switchMap, filter } from 'rxjs/operators';

import { State } from '../../reducers'; // Root State!
import { LoadBooks } from '../actions/book.actions';
import { getAllBooks, getBooksLoading } from '../selectors/book.selectors';
import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;
  loading$: Observable<boolean>;
  keyUp$ = new Subject<string>();
  isLoading = false;
  foundBooks: Book[] = [];

  constructor(private store: Store<State>,private bs: BookStoreService) { }

  ngOnInit() {
    this.keyUp$.pipe(
      filter(term => term.length >= 3),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.isLoading = true),
      switchMap(searchTerm => this.bs.getAllSearch(searchTerm)),
      tap(() => this.isLoading = false)
    )
    .subscribe(books => this.foundBooks = books);

    this.books$ = this.store.pipe(select(getAllBooks));
    this.loading$ = this.store.pipe(select(getBooksLoading));

    this.store.dispatch(new LoadBooks());
  }
}
