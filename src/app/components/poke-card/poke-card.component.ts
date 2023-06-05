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
