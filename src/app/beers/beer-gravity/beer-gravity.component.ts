import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";

import { Store, select } from '@ngrx/store';

import { ActivatedRoute, Router } from "@angular/router";
import { Beer } from 'src/app/shared/beer';
import { State } from 'src/app/reducers';
import { getBeerById } from '../selectors/beer.selectors';
import { LoadBeer } from '../actions/beer.actions';
import { BeerStoreService } from 'src/app/shared/beer-store.service';


@Component({
  selector: 'bm-edit-beer',
  templateUrl: './beer-gravity.component.html',
  styleUrls: ['./beer-gravity.component.css']
})

export class BeerGravityComponent implements OnInit {
  beer$: Observable<Beer>;
  @Input() beer: Beer;

  constructor(
    private bs: BeerStoreService,
    private router: Router,
    private store: Store<State>,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    const isbn = this.getId();
    this.beer$ = this.store.pipe(
      select(getBeerById, { isbn })
    );

    this.store.dispatch(new LoadBeer({ isbn }
    ));
  }

  getId() {
    return this.route.snapshot.paramMap.get('id');
  }
}
