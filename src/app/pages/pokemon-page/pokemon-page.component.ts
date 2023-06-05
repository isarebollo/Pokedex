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

  constructor(private router: Router, private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {

    this.inicializarListaPokemon()

  }
  inicializarListaPokemon() {
    this.pokemonService.getAllPokemon().subscribe({
      next: (data: Results) => {
        this.listaPokemon = data.results;
        console.log(this.listaPokemon)
      },
      error: (error) => console.error(`${error}`),
      complete: () => console.info('Peticion de pokemons terminada')

    });
  }
}
