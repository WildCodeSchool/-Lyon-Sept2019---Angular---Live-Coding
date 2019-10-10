import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  /** Input [display-products] array to display, passed in parameter */
  @Input('display-products') products: Product[];
  /** (addToCartEvent) event from this component to the parent */
  @Output() addToCartEvent = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Function called when the buyEvent is fired from the <app-product></app-product>
   * @param product product to buy
   */
  onBuyEvent(product: Product) {
    this.addToCartEvent.emit(product);
  }

}
