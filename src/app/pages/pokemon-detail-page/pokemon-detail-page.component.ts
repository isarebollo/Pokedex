import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPokemonDetail } from 'src/app/models/external/pokemonDetail.interface';

import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail-page',
  templateUrl: './pokemon-detail-page.component.html',
  styleUrls: ['./pokemon-detail-page.component.css']
})
export class PokemonDetailPageComponent implements OnInit {

  pokemonName: string = '';
  pokemonDetails: IPokemonDetail[] = [];
  pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.pokemonName = params['name'];
      this.getPokemonDetails();
    });
  }

  getPokemonDetails(): void {
    this.pokemonService.getPokemonDetailsByName(this.pokemonName).subscribe({
      next: (data) => {
        this.pokemonDetails = data;
        this.pokemon = this.mapPokemonData(data);//mapeamos los datos para mostrar solo con un nombre. 
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  private mapPokemonData(data: any): any {//mapeo de datos para que el html sea menos lioso
    const mappedPokemon = {
      name: data.name,
      height: data.height,
      weight: data.weight,
      base_experience: data.base_experience,
      types: data.types,
      abilities: data.abilities
    };
    return mappedPokemon;
  }

}
