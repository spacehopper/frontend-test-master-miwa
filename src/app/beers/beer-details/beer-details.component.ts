import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../../reducers';
import { LoadBook,LoadBeers } from '../actions/book.actions';
import { getBeerById } from '../selectors/beer.selectors';
import { Beer } from '../../shared/beer';
import { BeerStoreService } from '../../shared/beer-store.service';
import {Output,EventEmitter} from '@angular/core';
@Component({
  selector: 'bm-book-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {
  book$: Observable<Beer>;
  @Output() showListEvent = new EventEmitter<any>();

  constructor(
    private bs: BeerStoreService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<State>
  ) { }

  ngOnInit() {
    const isbn = this.getId();

    this.book$ = this.store.pipe(
      select(getBeerById, { isbn })
    );

    this.store.dispatch(new LoadBook({ isbn }));
  }

  getRating(num: number) {
    return new Array(num);
  }

  getId() {
    return this.route.snapshot.paramMap.get('id');
  }
}
