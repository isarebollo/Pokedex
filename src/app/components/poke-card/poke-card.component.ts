import { Component, OnInit, Input } from '@angular/core';
import { IPokemon, Results } from 'src/app/models/pokemon.interface';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {


  @Input() listaPokemon: IPokemon | undefined;

  constructor() { }
  ngOnInit(): void {

  }
}
