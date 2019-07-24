import { Component, OnInit, Input } from '@angular/core';

import { Beer } from '../../shared/beer';

@Component({
  selector: 'bm-book-list-item',
  templateUrl: './beer-list-item.component.html',
  styleUrls: ['./beer-list-item.component.css']
})
export class BeerListItemComponent implements OnInit {
  @Input() book: Beer;

  ngOnInit() {
  }
}
