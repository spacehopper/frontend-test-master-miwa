import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { BeerFormComponent } from './beer-form.component';
import { Beer } from '../../shared/beer';

describe('BeerFormComponent', () => {
  let component: BeerFormComponent;
  let fixture: ComponentFixture<BeerFormComponent>;
  let submitEl: DebugElement;

  const expectedBeer: Beer = {
/*     isbn: '1234567890',
    title: 'Test',
    authors: ['Author 1'],
    published: new Date(100000000000),
    subtitle: 'something',
    thumbnails: [{
      title: 'my title',
      url: 'https://via.placeholder.com/150'
    }],
    description: 'lorem ipsum dolor sit amet...' */
  };

  const emptyBeerData: Beer = {
/*     id: '',
    title: '',
    authors: [''],
    published: null,
    subtitle: '',
    thumbnails: [{
      title: '',
      url: ''
    }],
    description: '' */
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerFormComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    submitEl = fixture.debugElement.query(By.css('button[type=submit]'));
  });

  it('should initialize the form', () => {
    expect(component.beerForm.value).toEqual(emptyBeerData);
    expect(component.beerForm.valid).toBeFalsy();
  });

  it('should display a beer to edit', () => {
    component.beer = expectedBeer;
    component.ngOnChanges();
    expect(component.beerForm.value).toEqual(expectedBeer);
    expect(component.beerForm.errors).toBeNull();
  });

  it('should add an author input field', () => {
    component.addAuthorControl();
    expect(component.beerForm.value).toEqual({
      ...emptyBeerData,
      authors: ['', '']
    });
  });

  it('should add a Thumbnail FormGroup', () => {
    component.addThumbnailControl();
    expect(component.beerForm.value).toEqual({
      ...emptyBeerData,
      thumbnails: [{
        title: '',
        url: ''
      }, {
        title: '',
        url: ''
      }]
    });
  });

  it('should emit the FormData', () => {
    // spy on submit event
    spyOn(component.submitBeer, 'emit');

    // check if empty elements will be filtered out
    component.beer = {
/*       ...expectedBeer,
      authors: [ ...expectedBeer.authors, '', null ],
      thumbnails: [ ...expectedBeer.thumbnails,
        { url: '', title: 'should be filtered out' },
        { url: '', title: null },
        { url: null, title: '' }
      ] */
    };
    component.ngOnChanges();
    component.submitForm();

    // check emitted event data, expect filtered data
    expect(component.submitBeer.emit).toHaveBeenCalledWith(expectedBeer);

    // check if form has been resetted
    expect(component.beerForm.value).toEqual({
      isbn: null,
      title: null,
      authors: [ null, null, null ],
      published: null,
      subtitle: null,
      thumbnails: [
        { url: null, title: null },
        { url: null, title: null },
        { url: null, title: null },
        { url: null, title: null }
      ],
      description: null
    });
  });
});
