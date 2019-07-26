import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

import { Store, select } from '@ngrx/store';

import { ActivatedRoute } from "@angular/router";
import { Beer } from 'src/app/shared/beer';
import { State } from 'src/app/reducers';
import { getBeerById } from '../../selectors/beer.selectors';
import { LoadBeer } from '../../actions/beer.actions';


@Component({
  selector: 'bm-edit-beer',
  templateUrl: './beer-gravity.component.html',
  styleUrls: ['./beer-gravity.component.css']
})

export class BeerGravityComponent implements OnInit {
  
  beer$: Observable<Beer>;

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute
    )
     { }

  ngOnInit() {
    const isbn = this.getId();
console.log("1 componenten ts wird aufgerufen. isbn: "+isbn);
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
