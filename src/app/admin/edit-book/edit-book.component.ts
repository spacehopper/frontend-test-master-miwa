import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Book } from '../../shared/book';
import { State } from '../../reducers';
import { LoadBook } from 'src/app/books/actions/book.actions';
import { getBookByIsdn } from 'src/app/books/selectors/book.selectors';
import { UpdateBook } from '../actions/admin.actions';

@Component({
  selector: 'bm-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private store: Store<State>) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.book$ = this.store.pipe(select(getBookById, { id }));

    this.store.dispatch(new LoadBook({ id }));
  }

  updateBook(book: Book) {
    this.store.dispatch(new UpdateBook({ book }));
  }

}
