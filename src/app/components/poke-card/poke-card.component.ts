import { Component, OnInit, Input } from '@angular/core';
import { IPokemon } from 'src/app/models/JSONinterfaces/pokemon.interface';
import { IPokemonDetail } from 'src/app/models/external/pokemonDetail.interface';


@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {


  @Input() pokemon!: IPokemonDetail;

  constructor() { }
  ngOnInit(): void {
    console.log(this.pokemon)
  }

  public extractIdFromUrl(url: string): string {
    const segments = url.split('/');
    return segments[segments.length - 2];

  }
  getPokemonTypeClass(): string {
    if (this.pokemon && this.pokemon.url) {
      const pokemonNumber = this.getPokemonNumberFromUrl(this.pokemon.url);
      const pokemonType = this.getTypesByPokemonNumber(pokemonNumber);
      return `pokemon-type-${pokemonType.toLowerCase()}`;
    }
    return 'pokemon-type-default';
  }

  getPokemonNumberFromUrl(url: string): string {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 2];
  }

  getTypesByPokemonNumber(pokemonNumber: string): string {
    const pokemonTypes: { [key: string]: string } = {
      '1': 'grass',
      '2': 'grass',
      '3': 'grass',
      '4': 'fire',
      '5': 'fire',
      '6': 'fire',
      '7': 'water',
      '8': 'water',
      '9': 'water',
      '10': 'bug'
      // Agrega más tipos de Pokémon según sea necesario
    };
    return pokemonTypes[pokemonNumber] || 'default';
  }
}
