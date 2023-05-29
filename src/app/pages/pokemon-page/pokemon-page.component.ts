import { Component, OnInit } from '@angular/core';
import { Results } from 'src/app/models/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {

  pokemon: Results | undefined;
  randomPokemon: Results | undefined;
  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.pokemonService.obtenerPokemons().subscribe((response: Results) => {

      this.pokemon = response;
      console.log(response)
    }) }

  obtenerPokemon() {
    this.pokemonService.obtenerPokemons().subscribe(
      {
        next: (response: Results) => {
          console.log('Hola' + response)
        },
        error: (error) => console.error(`${error}`),
        complete: () => console.info('Peticion de random contact terminada')
      }
    )

  }

}
