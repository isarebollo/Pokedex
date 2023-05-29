import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IPokemon, Results } from 'src/app/models/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {

  pokemon: Results | undefined;


  listaPokemon: IPokemon[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.pokemonService.getAllPokemon().subscribe((response: Results) => {

      this.pokemon = response;
      this.listaPokemon = this.pokemon.results;
      console.log(this.listaPokemon);
    })
  }

  obtenerPokemon() {
    this.pokemonService.getAllPokemon().subscribe(
      {
        next: (response: Results) => {
          response.results.forEach((pokemon: IPokemon, index: number) => {
            this.listaPokemon.push(pokemon);
          })

        },
        error: (error) => console.error(`${error}`),
        complete: () => console.info('Peticion de random contact terminada')
      }
    )

  }

  extractIdFromUrl(url: string): number {
    const urlParts = url.split('/');
    return parseInt(urlParts[urlParts.length - 2], 10);
  }

  volverAHome(pokemon: IPokemon) {

    //navigationExtras tipo de datos de navegacion

    let navigationExtras: NavigationExtras = {
      state: {
        results: pokemon
      }
    }
    this.router.navigate(['/home'], navigationExtras)
  }

}
