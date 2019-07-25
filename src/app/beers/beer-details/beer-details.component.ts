import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from '../../reducers';
import { LoadBeer,LoadBeers } from '../actions/beer.actions';
import { getBeerById } from '../selectors/beer.selectors';
import { Beer } from '../../shared/beer';
import { BeerStoreService } from '../../shared/beer-store.service';

@Component({
  selector: 'bm-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {
  beer$: Observable<Beer>;

  constructor(
    private bs: BeerStoreService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<State>
  ) { }

  ngOnInit() {
    const isbn = this.getId();

    this.beer$ = this.store.pipe(
      select(getBeerById, { isbn })
    );

    this.store.dispatch(new LoadBeer({ isbn }));
  }


  getId() {
    return this.route.snapshot.paramMap.get('id');
  }
 

}
