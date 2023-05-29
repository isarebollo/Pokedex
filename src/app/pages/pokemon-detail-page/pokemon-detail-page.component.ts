import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Results } from 'src/app/models/pokemon.interface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail-page',
  templateUrl: './pokemon-detail-page.component.html',
  styleUrls: ['./pokemon-detail-page.component.css']
})
export class PokemonDetailPageComponent implements OnInit {

  pokemonName!: string;
  pokemonDetails: any;

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
    this.pokemonService.getPokemonDetailsByName(this.pokemonName).subscribe(
      (data) => {
        this.pokemonDetails = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
