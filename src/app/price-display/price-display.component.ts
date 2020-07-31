import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'price-display',
  //escaping the dollar sign because this is a backtick string and the dollar sign is used for template variables (ES6)
  template: `<div class= "price-display>\${{ price }}</div>
  `,
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent implements OnInit {


  @Input() price: number;
  constructor() { }

  ngOnInit(): void {
  }

}
