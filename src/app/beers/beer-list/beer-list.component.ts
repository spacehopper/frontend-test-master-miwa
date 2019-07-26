import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { debounceTime, distinctUntilChanged, tap, switchMap, filter } from 'rxjs/operators';

import { State } from '../../reducers'; // Root State!
import { LoadBeers } from '../actions/beer.actions';
import { getAllBeers, getBeersLoading } from '../selectors/beer.selectors';
import { Beer } from '../../shared/beer';
import { BeerStoreService } from '../../shared/beer-store.service';

@Component({
  selector: 'bm-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css']
})
export class BeerListComponent implements OnInit {
  beers$: Observable<Beer[]>;
  loading$: Observable<boolean>;
  keyUp$ = new Subject<string>();
  isLoading = false;
  foundBeers: Beer[] = [];

  constructor(private store: Store<State>,private bs: BeerStoreService) { }

  ngOnInit() {
    console.log("ngOnInit");
    this.beers$ = this.store.pipe(select(getAllBeers));
    this.loading$ = this.store.pipe(select(getBeersLoading));

    this.store.dispatch(new LoadBeers());
  }
}
