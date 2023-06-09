import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IPokemon, Results } from '../models/JSONinterfaces/pokemon.interface';
import { IPokemonDetail } from '../models/external/pokemonDetail.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  private apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  getAllPokemon(): Observable<Results> {// devuelto como un arreglo de Ipokemon
    const url = `${this.apiUrl}pokemon`;
    return this.http.get<any>(url);
  }
  getPokemonDetailsById(id: string): Observable<IPokemonDetail[]> {//  devuelto como un arreglo de IpokemonDetail
    const url = `${this.apiUrl}pokemon/${id}`;
    return this.http.get<any>(url);
  }

  getNavbarColorByPokemonTypes(types: string[]): string {
    let navbarColor = '';

    // Asignar un color de fondo según los tipos de Pokémon
    if (types.includes('fire')) {
      navbarColor = 'type-fire';
    } else if (types.includes('water')) {
      navbarColor = 'type-water';
    } else if (types.includes('grass')) {
      navbarColor = 'type-grass';
    } else if (types.includes('electric')) {
      navbarColor = 'bg-yellow';
    } else {
      navbarColor = 'white-nav'; // Color predeterminado si no coincide con ningún tipo conocido
    }

    return navbarColor;
  }

}


