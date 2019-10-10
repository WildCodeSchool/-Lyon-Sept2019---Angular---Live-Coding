import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent implements OnInit {

  @Output() incrementEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onIncrementButtonClicked() {
    this.incrementEvent.emit();
  }
}
