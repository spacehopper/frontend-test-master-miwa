import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';

import { Beer } from './beer';
import { BeerRaw } from './beer-raw';
import { BeerFactory } from './beer-factory';

@Injectable({
  providedIn: 'root'
})
export class BeerStoreService {
  private api = 'https://api.punkapi.com/v2';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Beer[]> {
    return this.http.get<BeerRaw[]>(`${this.api}/beers`)
      .pipe(
        retry(3),
        map(beersRaw =>
          beersRaw.map(b => BeerFactory.fromRaw(b)),
        ),
        catchError(this.errorHandler)
      );
  }

  getSingle(id: string): Observable<Beer> {
    return this.http.get<BeerRaw>(
      `${this.api}/beers?ids=${id}`
    ).pipe(
      retry(3),
      map(b => BeerFactory.fromRaw(b)),
      catchError(this.errorHandler)
    );
  }
  update(beer: Beer): Observable<any> {
    return this.http.put(
      `${this.api}/beer/${beer.id}`,
      beer,
      { responseType: 'text' }
    ).pipe(
      catchError(this.errorHandler)
    );
  }

  getAllSearch(searchTerm: string): Observable<Beer[]> {
    return this.http.get<BeerRaw[]>(
      `${this.api}/beers?beer_name=${searchTerm}`
    ).pipe(
      retry(3),
      map(beersRaw =>
        beersRaw.map(b => BeerFactory.fromRaw(b)),
      ),
      catchError(this.errorHandler)
    );
  }

  private errorHandler(error: HttpErrorResponse): Observable<any> {
    console.error('Fehler aufgetreten!');
    return throwError(error);
  }
}
