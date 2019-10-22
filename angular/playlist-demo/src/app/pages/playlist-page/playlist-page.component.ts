import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/shared/song';
import { PlaylistService } from 'src/app/shared/playlist.service';

@Component({
  selector: 'app-playlist-page',
  templateUrl: './playlist-page.component.html',
  styleUrls: ['./playlist-page.component.css']
})
export class PlaylistPageComponent implements OnInit {

  songs: Song[];

  constructor(public playlistService: PlaylistService) { }

  ngOnInit() {
    this.songs = this.playlistService.songs;
  }

  onSongSelected(songToPlay: Song) {
    this.playlistService.setCurrentSong(songToPlay);
  }
}
