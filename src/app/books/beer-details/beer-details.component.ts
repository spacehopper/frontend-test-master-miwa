import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../../reducers';
import { LoadBook,LoadBooks } from '../actions/book.actions';
import { getBookById } from '../selectors/book.selectors';
import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';
import {Output,EventEmitter} from '@angular/core';
@Component({
  selector: 'bm-book-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book$: Observable<Book>;
  @Output() showListEvent = new EventEmitter<any>();

  constructor(
    private bs: BookStoreService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<State>
  ) { }

  ngOnInit() {
    const isbn = this.getId();

    this.book$ = this.store.pipe(
      select(getBookById, { isbn })
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
