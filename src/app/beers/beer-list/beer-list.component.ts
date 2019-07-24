import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, tap, switchMap, filter } from 'rxjs/operators';

import { State } from '../../reducers'; // Root State!
import { LoadBeers } from '../actions/beer.actions';
import { getAllBeers, getBooksLoading } from '../selectors/beer.selectors';
import { Beer } from '../../shared/beer';
import { BeerStoreService } from '../../shared/beer-store.service';

@Component({
  selector: 'bm-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  books$: Observable<Beer[]>;
  loading$: Observable<boolean>;
  keyUp$ = new Subject<string>();
  isLoading = false;
  foundBooks: Beer[] = [];

  constructor(private store: Store<State>,private bs: BeerStoreService) { }

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

    this.books$ = this.store.pipe(select(getAllBeers));
    this.loading$ = this.store.pipe(select(getBooksLoading));

    this.store.dispatch(new LoadBeers());
  }
}
