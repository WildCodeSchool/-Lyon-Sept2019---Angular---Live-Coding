import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  pokemons: Pokemon[];

  constructor(private monServicePokemon: PokemonService) { }

  ngOnInit() {
    this.monServicePokemon.getPokemons()
      .subscribe(response => {
        this.pokemons = response.cards;
      });
  }

}
