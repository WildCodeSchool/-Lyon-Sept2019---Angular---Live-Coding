import { Observable } from 'rxjs';
import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  pokemons$: Observable<Pokemon[]>;
  pokemons: Pokemon[] = this.monServicePokemon.cards;

  constructor(public monServicePokemon: PokemonService) {}
  
  ngOnInit() {
    //this.pokemons$ = this.monServicePokemon.loadPokemons();;
    //this.pokemons$ = this.monServicePokemon.cards;
    //this.pokemons = this.monServicePokemon.cards;
    this.monServicePokemon.loadPokemons();
  }

}
