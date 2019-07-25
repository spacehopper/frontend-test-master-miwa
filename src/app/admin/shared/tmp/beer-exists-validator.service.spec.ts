/* import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { BeerExistsValidatorService } from './beer-exists-validator.service';
import { BeerStoreService } from '../../../shared/beer-store.service';
import { FormControl } from '@angular/forms';

describe('BeerExistsValidatorService', () => {
  let service: BeerExistsValidatorService;

  let beerStoreServiceStub: Partial<BeerStoreService>;
  beerStoreServiceStub = {
    check: (id: string): Observable<boolean> => {
      return id === '1111111111' ? of(true) : of(false);
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BeerExistsValidatorService,
        { provide: BeerStoreService, useValue: beerStoreServiceStub }
      ]
    });
    service = TestBed.get(BeerExistsValidatorService);
  });

  it('should detect that the ISBN does not exist', () => {
    service.validate(new FormControl('0123456789'))
      .subscribe(res => {
        expect(res).toBeNull();
      });
  });

  it('should detect that the ISBN already exist', () => {
    service.validate(new FormControl('1111111111'))
      .subscribe(res => {
        expect(res).toEqual({ idExists: { valid: false } });
      });
  });

});
 */