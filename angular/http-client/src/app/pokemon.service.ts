import { Pokemon } from './pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl = 'https://api.pokemontcg.io/v1';

  constructor(private http: HttpClient) {}

  getPokemons(): Observable<{cards: Pokemon[]}> {
    return this.http.get<{cards: Pokemon[]}>(`${this.baseUrl}/cards`);
  }
}
