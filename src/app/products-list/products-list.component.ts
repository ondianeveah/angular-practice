import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {


  //Input specifies the parameters we expect our component to receive
  @Input() productList: Product[];
  /*EventEmitter is an object that helps to implement Observer 
  Pattern(a software design pattern in which an object, the 
    subject, maintains a list of its dependents, called observers, 
    and notifies them automatically of any state changes, usually 
    by calling one of their methods)*/
  @Output() onProductSelected: EventEmitter<Product> ;


  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
   }

  ngOnInit(): void {
  }

  //sets this.currentProduct to the Product that was passed in
  //Emits the Product that was click on our output
  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  //this function accepts a Product and returns true if product's sku matches the currentProduct's sku else it turns false
  isSelected(product: Product): boolean {
    if(!product || !this.currentProduct){
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
