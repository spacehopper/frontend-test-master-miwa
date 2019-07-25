import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Beer } from 'src/app/shared/beer';
import { Observable } from 'rxjs';
import { BeerStoreService } from 'src/app/shared/beer-store.service';
import { getBeerById } from 'src/app/beers/selectors/beer.selectors';
import { select, Store} from '@ngrx/store';
import { Router, ActivatedRoute } from '@angular/router';
import { State } from '../../reducers';

@Component({
  selector: 'bm-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.css']
})
export class BeerFormComponent implements OnInit, OnChanges {
  beer$: Observable<Beer>;
  beerForm: FormGroup;

  @Input() beer: Beer;
  @Input() editing = false;
  @Output() submitBeer = new EventEmitter<Beer>();

  constructor(
    private fb: FormBuilder,
    private bs: BeerStoreService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<State>
  ) { }

  ngOnInit() {
    const isbn = this.getId();

    this.beer$ = this.store.pipe(
      select(getBeerById, { isbn })
    );
  }
  getId() {
    return this.route.snapshot.paramMap.get('id');
  }
  ngOnChanges() {
    this.initForm();
    this.setFormValues(this.beer);
  }

  private setFormValues(beer: Beer) {
    this.beerForm.patchValue(beer);

/*     this.beerForm.setControl(
      'authors',
      this.buildAuthorsArray(beer.name)
    ); */
  }

  private initForm() {
    if (this.beerForm) { return; }

    this.beerForm = this.fb.group({
      /* title: ['', Validators.required],
      subtitle: [''],
      isbn: [
        { value: '', disabled: this.editing },
        [
          Validators.required
        ],
        this.editing ? null : [this.beerExistsValidator]
      ],
      description: [''],
      authors: this.buildAuthorsArray(['']),
      published: [] */
    });
  }

  private buildAuthorsArray(values: string[]): FormArray {
    return;
  }


  get authors(): FormArray {
    return this.beerForm.get('authors') as FormArray;
  }

  get thumbnails(): FormArray {
    return this.beerForm.get('thumbnails') as FormArray;
  }

  addAuthorControl() {
    this.authors.push(this.fb.control(''));
  }

  addThumbnailControl() {
    this.thumbnails.push(
      this.fb.group({ url: '', title: '' })
    );
  }

  submitForm() {
    const formValue = this.beerForm.value;
    const authors = formValue.authors
              .filter(author => author);
    const thumbnails = formValue.thumbnails
              .filter(thumbnail => thumbnail.url);

    const isbn = this.editing ? this.beer.id : formValue.isbn;

    const newBeer: Beer = {
      ...formValue,
      isbn,
      authors,
      thumbnails
    };

    this.submitBeer.emit(newBeer);
    this.beerForm.reset();
  }
}
