import { Component, OnInit, Input } from '@angular/core';

import { Beer } from '../../shared/beer';

@Component({
  selector: 'bm-beer-list-item',
  templateUrl: './beer-list-item.component.html',
  styleUrls: ['./beer-list-item.component.css']
})
export class BeerListItemComponent implements OnInit {
  @Input() beer: Beer;

  ngOnInit() {
  }
}
