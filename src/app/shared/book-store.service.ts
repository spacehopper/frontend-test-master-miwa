import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, map, catchError } from 'rxjs/operators';

import { Book } from './book';
import { BookRaw } from './book-raw';
import { BookFactory } from './book-factory';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  //private api-backup = 'https://api3.angular-buch.com/secure';
  private api = 'https://api.punkapi.com/v2';

  constructor(private http: HttpClient) {}

/*   public getAll2(): Observable<any> {
    return this.http.get('https://api.punkapi.com/v2/beers');
  } */

  getAll(): Observable<Book[]> {
    return this.http.get<BookRaw[]>(`${this.api}/beers`)
      .pipe(
        retry(3),
        map(booksRaw =>
          booksRaw.map(b => BookFactory.fromRaw(b)),
        ),
        catchError(this.errorHandler)
      );
  }

  getSingle(id: string): Observable<Book> {
    console.log("getSingle: "+id);
    return this.http.get<BookRaw>(
      `${this.api}/beers?ids=${id}`
    ).pipe(
      retry(3),
      map(b => BookFactory.fromRaw(b)),
      catchError(this.errorHandler)
    );
  }

  create(book: Book): Observable<any> {
    return this.http.post(
      `${this.api}/book`,
      book,
      { responseType: 'text' }
    ).pipe(
      catchError(this.errorHandler)
    );
  }

  update(book: Book): Observable<any> {
    return this.http.put(
      `${this.api}/book/${book.id}`,
      book,
      { responseType: 'text' }
    ).pipe(
      catchError(this.errorHandler)
    );
  }

  remove(id: string): Observable<any> {
    return this.http.delete(
      `${this.api}/book/${id}`,
      { responseType: 'text' }
    ).pipe(
      catchError(this.errorHandler)
    );
  }

  getAllSearch(searchTerm: string): Observable<Book[]> {
 console.log("getAllSeach: "+searchTerm);
    return this.http.get<BookRaw[]>(
      `${this.api}/beers?beer_name=${searchTerm}`
    ).pipe(
      retry(3),
      map(booksRaw =>
        booksRaw.map(b => BookFactory.fromRaw(b)),
      ),
      catchError(this.errorHandler)
    );
  }

  check(id: string): Observable<boolean> {
    return this.http.get(
      `${this.api}/book/${id}/check`
    ).pipe(
      catchError(this.errorHandler)
    );
  }

  private errorHandler(error: HttpErrorResponse): Observable<any> {
    console.error('Fehler aufgetreten!');
    return throwError(error);
  }
}
