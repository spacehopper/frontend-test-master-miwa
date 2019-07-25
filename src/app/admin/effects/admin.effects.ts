import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap, mergeMap } from 'rxjs/operators';

/* import { AdminActionTypes, AdminActions, UpdateBeerSuccess } from '../actions/admin.actions';
 */import { BeerStoreService } from 'src/app/shared/beer-store.service';

@Injectable()
export class AdminEffects {

  /* @Effect()
  updateBeer$ = this.actions$.pipe(
    ofType(AdminActionTypes.UpdateBeer),
    map(action => action.payload.beer),
    mergeMap(beer =>
      this.bs.update(beer).pipe(
        map(() => new UpdateBeerSuccess({ beer })),
        tap(() => this.router.navigate(['/beers', beer.id]))
      )
    )
  ); */

        
  constructor(
/*     private actions$: Actions<AdminActions>,
 */    private bs: BeerStoreService,
    private router: Router) {}

}
