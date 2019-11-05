import { Pokemon } from './pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = 'https://api.pokemontcg.io/v1';
  cards: Pokemon[] = [];

  constructor(private http: HttpClient) {}

  loadPokemons() {
    this.http.get<{cards: Pokemon[]}>(`${this.baseUrl}/cards?pageSize=10`)
      .pipe(
        map((response: {cards: Pokemon[]}) => {
          return response.cards
        })
      ).subscribe((response: Pokemon[]) => {
        this.cards.push(...response);
      });
  }
}
