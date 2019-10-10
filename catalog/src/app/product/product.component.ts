import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

/**
 * Represent a single product.
 * Take the product to reprent in parameter/input.
 */
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  /** Input parameter [display-product] */
  @Input('display-product') product: Product;
  /** (buyEvent) to emit from this component to the parent */
  @Output() buyEvent = new EventEmitter<Product>()

  constructor() { }

  ngOnInit() {
  }

  /**
   * Function called when the user click on the buy button 
   */
  onBuyClicked() {
    this.buyEvent.next(this.product);
  }
}
