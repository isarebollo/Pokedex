import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPokemonDetail } from 'src/app/models/external/pokemonDetail.interface';

import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail-page',
  templateUrl: './pokemon-detail-page.component.html',
  styleUrls: ['./pokemon-detail-page.component.css']
})
export class PokemonDetailPageComponent implements OnInit {

  heightInMetres: any;
  heightInFeetInches: any;
  weightInKgs: any;
  weightInPounds: any;
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
    this.pokemonService.getPokemonDetailsById(this.pokemonName).subscribe({
      next: (data) => {
        this.pokemonDetails = data;
        this.pokemon = this.mapPokemonData(data);
        this.heightInMetres = (this.pokemon.height * 0.1).toFixed(1);
        this.heightInFeetInches =
          Math.floor(this.heightInMetres * 3.2808) +
          '"' +
          Math.round(((this.heightInMetres * 3.2808) % 1) * 12) +
          '\'';
        this.weightInKgs = (this.pokemon.weight * 0.1).toFixed(1);
        this.weightInPounds = (this.weightInKgs * 2.205).toFixed(1);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  private mapPokemonData(data: any): any {//mapeo de datos para que el html sea menos lioso
    const mappedPokemon = {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      base_experience: data.base_experience,
      types: data.types,
      abilities: data.abilities,
      stats: data.stats,
    };
    return mappedPokemon;
  }





}



