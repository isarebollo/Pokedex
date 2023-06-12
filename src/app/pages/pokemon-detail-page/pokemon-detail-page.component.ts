import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPokemonDetail } from 'src/app/models/external/pokemonDetail.interface';
import { NavbarService } from 'src/app/services/navbar.service';

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

  stats: string[] = ['0%', '0%', '0%', '0%', '0%', '0%'];


  constructor(
    private route: ActivatedRoute, private pokemonService: PokemonService, private navbarService: NavbarService
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

        const pokemonTypes = this.pokemon.types.map((type: any) => type.type.name);
        const navbarColor = this.pokemonService.getNavbarColorByPokemonTypes(pokemonTypes);
        this.navbarService.setNavbarColor(navbarColor);


      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  private mapPokemonData(data: any): any {
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


  getProgressBarColor(type: string): string {
    switch (type) {
      case 'bug':
        return 'pokemon-type-bug';
      case 'dark':
        return 'pokemon-type-dark';
      case 'dragon':
        return 'pokemon-type-dragon';
      case 'electric':
        return 'pokemon-type-electric';
      case 'fairy':
        return 'pokemon-type-fairy';
      case 'fighting':
        return 'pokemon-type-fighting';
      case 'fire':
        return 'pokemon-type-fire';
      case 'flying':
        return 'pokemon-type-flying';
      case 'ghost':
        return 'pokemon-type-ghost';
      case 'grass':
        return 'pokemon-type-grass';
      case 'ground':
        return 'pokemon-type-ground';
      case 'ice':
        return 'pokemon-type-ice';
      case 'normal':
        return 'pokemon-type-normal';
      case 'poison':
        return 'pokemon-type-poison';
      case 'psychic':
        return 'pokemon-type-psychic';
      case 'rock':
        return 'pokemon-type-rock';
      case 'steel':
        return 'pokemon-type-steel';
      case 'water':
        return 'pokemon-type-water';
      default:
        return '';
    }
  }
}



