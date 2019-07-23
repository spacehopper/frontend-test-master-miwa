import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of, Observable } from 'rxjs';

import { BookDetailsComponent } from './beer-details.component';
import { BookStoreService } from '../../shared/book-store.service';
import { Book } from '../../shared/book';
import { IsbnPipe } from '../shared/isbn.pipe';
import { DelayDirective } from '../shared/delay.directive';

const expectedBook = {
   id: '1',
  name: 'Buzz',
  tagline: 'good beer',
  first_brewed: '01-2019',
  description: 'this is a description',
  image_url: 'this is a url'
};

@Component({ template: '<router-outlet></router-outlet>' })
class TestOutletComponent { }

class BookStoreServiceMock {
  getSingle(id: string): Observable<Book> {
    return of(id === expectedBook.id ? expectedBook : null);
  }
  remove(id: string): Observable<any> {
    return of();
  }
}

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;
  let nativeEl: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestOutletComponent,
        BookDetailsComponent,
        IsbnPipe,
        DelayDirective
      ],
      providers: [
        {
          provide: BookStoreService,
          useClass: BookStoreServiceMock
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: { get: (key) => '111' }
            }
          }
        }
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: ':isbn', component: BookDetailsComponent }
        ])
      ]
    });
  }));

  beforeEach(async(() => {
    TestBed.createComponent(TestOutletComponent);
    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    nativeEl = fixture.nativeElement;
    fixture.detectChanges();
  }));

 /*  it('should fetch a single book', () => {
    expect(component.book$.id).toBe('1');
  }); */

  it('should convert rating number into an array', () => {
    const ratingEl = nativeEl.querySelectorAll('i.star');
    expect(ratingEl.length).toBe(4);
  });

  it('should remove a book and navigate back', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    fixture.nativeElement.querySelector('button').click();
    // TODO: check if remove book has been called and check routing
  });

  it('should redirect to edit page', () => {
    fixture.nativeElement.querySelector('a').click();
    // TODO: check routing
  });
});
