import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  /** Input [products] array to display */
  @Input() products: Product[];

  constructor() { }

  ngOnInit() {
  }

  

}
