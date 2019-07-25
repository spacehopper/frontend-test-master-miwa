import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BeerGravityComponent } from './beer-gravity.component';

describe('BeerGravityComponent', () => {
  let component: BeerGravityComponent;
  let fixture: ComponentFixture<BeerGravityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerGravityComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerGravityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
