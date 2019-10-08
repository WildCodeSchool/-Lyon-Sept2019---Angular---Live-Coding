import { Component } from '@angular/core';
import { Dot } from './dot';
import { randomNumber } from './helpers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dots: Dot[] = new Array<Dot>();
  
  constructor() {
    for (let i = 0; i < 1000; i++) {
      this.addDot(i);
    }
  }

  addDot(i: number) {
    let dot = new Dot();
    this.dots.push(dot);

    setTimeout(() => {
      this.dots.splice(i, 1);
      this.addDot(i);
    }, randomNumber(4000));
  }
}
