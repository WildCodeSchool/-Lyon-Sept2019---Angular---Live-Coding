import { Component, OnInit, Input } from '@angular/core';
import { Song } from 'src/app/shared/song';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {

  @Input() song: Song;

  constructor() { }

  ngOnInit() {
  }

}
