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
    console.log(this.pokemon)

  }
}
