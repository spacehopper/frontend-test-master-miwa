import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Beer } from 'src/app/shared/beer';
import { State } from '../../reducers';
import { LoadBeer } from 'src/app/beers/actions/beer.actions';
import { getBeerById } from 'src/app/beers/selectors/beer.selectors';
import { UpdateBeer } from '../actions/admin.actions';
import { BeerStoreService } from 'src/app/shared/beer-store.service';
import { EventEmitter } from 'protractor';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'bm-edit-beer',
  templateUrl: './edit-beer.component.html',
  styleUrls: ['./edit-beer.component.css']
})
export class EditBeerComponent implements OnInit {
  beerForm: FormGroup;
  @Input() beer: Beer;
  
  beer$: Observable<Beer>;

  constructor(
    private bs: BeerStoreService,
    private router: Router,
    private route: ActivatedRoute, private store: Store<State>
    )
     { }

  ngOnInit() {
    const isbn = this.getId();
console.log("isbn: "+isbn);
    this.beer$ = this.store.pipe(
      select(getBeerById, { isbn })
    );

    this.store.dispatch(new LoadBeer({ isbn }
      ));
  }

  getId() {
    return this.route.snapshot.paramMap.get('id');
  }
  submitForm() {
    const formValue = this.beerForm.value;

    console.log("bla");
  }
}
