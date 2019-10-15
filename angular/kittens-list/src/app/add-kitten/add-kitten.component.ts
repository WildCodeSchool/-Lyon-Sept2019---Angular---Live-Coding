import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Kitten } from '../kitten';

@Component({
  selector: 'app-add-kitten',
  templateUrl: './add-kitten.component.html',
  styleUrls: ['./add-kitten.component.css']
})
export class AddKittenComponent implements OnInit {

  kitten: Kitten = new Kitten();
  @Output() addEvent = new EventEmitter<Kitten>();

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.addEvent.emit(this.kitten);
    this.kitten = new Kitten();
  }
}
