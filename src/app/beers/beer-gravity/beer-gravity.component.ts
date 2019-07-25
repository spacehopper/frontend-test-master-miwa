import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Beer } from '../../shared/beer';
import { Store, select } from '@ngrx/store';
import { State } from '../../reducers';
import { ActivatedRoute } from "@angular/router";
import { getBeerById } from '../selectors/beer.selectors';


@Component({
  selector: 'bm-edit-beer',
  templateUrl: './beer-gravity.component.html',
  styleUrls: ['./beer-gravity.component.css']
})

export class BeerGravityComponent implements OnInit {
  /* beerForm: FormGroup;
  @Input() beer: Beer;
   */
  beer$: Observable<Beer>;

  constructor(
  /*   private bs: BeerStoreService,
    private router: Router,
    private route: ActivatedRoute, private store: Store<State> */
    private store: Store<State>,
    private route: ActivatedRoute
    )
     { }

  ngOnInit() {
    const isbn = this.getId();
console.log("isbn: "+isbn);
    this.beer$ = this.store.pipe(
      select(getBeerById, { isbn })
    );

   /*  this.store.dispatch(new LoadBeer({ isbn }
      )); */
  }

  getId() {
    return this.route.snapshot.paramMap.get('id');
  }
/*   submitForm() {
    const formValue = this.beerForm.value;

    console.log("bla");
  } */
}
