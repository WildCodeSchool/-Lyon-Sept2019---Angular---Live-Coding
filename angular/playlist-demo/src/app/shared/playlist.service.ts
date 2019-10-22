import { Injectable } from '@angular/core';
import { Song } from './song';
import { SONGS } from './mock-songs';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  songs: Song[] = SONGS;
  currentSong: Song;

  constructor() { }

  setCurrentSong(song: Song) {
    this.currentSong = song;
  }
}
