import { Component, OnInit, Input } from '@angular/core';
import { Kitten } from '../kitten';

@Component({
  selector: 'app-kittens-list',
  templateUrl: './kittens-list.component.html',
  styleUrls: ['./kittens-list.component.css']
})
export class KittensListComponent implements OnInit {

  @Input('display-list') list: Kitten[];

  constructor() { }

  ngOnInit() {
    console.log(this.list);
  }

}
