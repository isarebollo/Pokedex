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
    const pokemonPromises: Promise<IPokemonDetail | undefined>[] = [];

    for (let i = 1; i <= 30; i++) {
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
        console.info('Peticion inicial de pokemon terminada');
      });
  }



}
