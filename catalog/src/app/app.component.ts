import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /** Products array to display */
  products: Product[] = new Array<Product>();
  /** Products array to buy. Represent products in the cart */
  productsToBuy: Product[] = new Array<Product>();

  constructor() {
    for(let i = 0; i < 10; i++) {
      this.products.push(new Product(i, `Produit ${i}`, i * 10, 0));
    }
  }

  /**
   * Function called when the addToCartEvent of <list-products></list-products> is fired
   * @param product product to buy
   */
  addToCart(product) {
    this.productsToBuy.push(product);
  }
}
