import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'product-image',
  //telling angular that we want to use the src input on this img tag
  //angular will then replace the value of the src attribute once the expression is resolved
  template: `<img class="product-image" [src]="product.imageUrl">`,
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit {

  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';

  constructor() { }

  ngOnInit(): void {
  }

}
