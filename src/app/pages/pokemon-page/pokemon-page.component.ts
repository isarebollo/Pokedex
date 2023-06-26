import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPokemon } from 'src/app/models/JSONinterfaces/pokemon.interface';
import { IPokemonDetail, Results } from 'src/app/models/external/pokemonDetail.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {



  listaPokemon: IPokemonDetail[] = [];
  searchText = '';
  showSearch = true;
  _timeout: any = null;
  searchResults: IPokemonDetail[] = [];
  isLoading = false; // Variable para controlar el estado de carga

  constructor(private router: Router, private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.inicializarListaPokemon();
  }

  inicializarListaPokemon() {
    this.isLoading = true; // Iniciar la carga

    const pokemonPromises: Promise<IPokemonDetail | undefined>[] = [];

    for (let i = 1; i <= 600; i++) {
      const promise = this.pokemonService.getPokemonDetailsById(i.toString()).toPromise()
        .then((pokemonDetail) => {
          return pokemonDetail as unknown as IPokemonDetail;
        })
        .catch((error) => {
          console.error(`Error en el detalle del pokemon con ID ${i}: ${error}`);
          return undefined;
        });

      pokemonPromises.push(promise);
    }

    Promise.all(pokemonPromises)
      .then((pokemonDetails) => {
        this.listaPokemon = pokemonDetails.filter((pokemon) => pokemon !== undefined) as IPokemonDetail[];
        // console.log(this.listaPokemon);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.isLoading = false; // Finalizar la carga
        console.info('Peticion inicial de pokemon terminada');
      });
  }

  searchPokemon(): void {
    clearTimeout(this._timeout);
    this._timeout = setTimeout(() => {
      if (this.searchText.trim() !== '') {
        this.isLoading = true; // Iniciar la carga

        this.pokemonService.getAllPokemon().subscribe(
          (pokemons: Results) => {
            // Filtrar los Pokémon que coincidan con el término de búsqueda
            this.searchResults = pokemons.results.filter(
              (pokemon) =>
                pokemon.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
                pokemon.url.includes(this.searchText)
            );

            this.isLoading = false; // Finalizar la carga
          },
          (error) => {
            console.error(error);
            this.isLoading = false; // Finalizar la carga en caso de error
          }
        );
      } else {
        this.searchResults = [];
      }
    }, 300);
  }

  matchesFilter(pokemon: IPokemonDetail): boolean {
    if (this.searchText.trim() === '') {
      return true; // Mostrar todos los Pokémon cuando el filtro está vacío
    }
  
    const lowerCaseSearchText = this.searchText.toLowerCase();
    return (
      pokemon.name.toLowerCase().includes(lowerCaseSearchText) ||
      pokemon.id.toString().includes(lowerCaseSearchText)
    );
  }

}
