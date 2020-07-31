import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {

  @Input() product: Product;
  //let us set attributes on the host element, the host is the element this component is attached to
  //basically we want to attach the CSS class item to the host element
  @HostBinding('attr.class') cssClass = 'item';

  constructor() { }

  ngOnInit(): void {
  }

}
