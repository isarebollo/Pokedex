import { Component, OnInit, Input } from '@angular/core';
import { IPokemon, Results } from 'src/app/models/pokemon.interface';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {


  @Input() pokemon!: IPokemon;

  constructor() { }
  ngOnInit(): void {

  }
  getPokemonImageUrl(): string {
    const pokemonId = this.extractIdFromUrl(this.pokemon.url);
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
  }

  public extractIdFromUrl(url: string): string {
    const segments = url.split('/');
    return segments[segments.length - 2];
  }
  getPokemonTypeClass(): string {
    if (this.pokemon && this.pokemon.types && this.pokemon.types.length > 0) {
      const pokemonType = this.pokemon.types[0].type.name;
      return `pokemon-type-${pokemonType.toLowerCase()}`;
    }
    return 'pokemon-type-default';
  }



}
