import { Component, Input } from '@angular/core';
import { Dot } from '../dot';

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.css']
})
export class DotComponent {
  
  @Input() dot: Dot;

  constructor() { }

}
