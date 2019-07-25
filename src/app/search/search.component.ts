import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, switchMap, filter } from 'rxjs/operators';

import { Beer } from '../shared/beer';
import { BeerStoreService } from '../shared/beer-store.service';

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  keyUp$ = new Subject<string>();
  isLoading = false;
  foundBeers: Beer[] = [];

  constructor(private bs: BeerStoreService) { }

  ngOnInit() {
    this.keyUp$.pipe(
      filter(term => term.length >= 1),
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.isLoading = true),
      switchMap(searchTerm => this.bs.getAllSearch(searchTerm)),
      tap(() => this.isLoading = false)
    )
    .subscribe(beers => this.foundBeers = beers);
  }
}
