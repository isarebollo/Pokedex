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
    if (types.includes('bug')) {
      navbarColor = 'type-bug';
    } else if (types.includes('dark')) {
      navbarColor = 'type-dark';
    } else if (types.includes('dragon')) {
      navbarColor = 'type-dragon';
    } else if (types.includes('electric')) {
      navbarColor = 'type-electric';
    } else if (types.includes('fairy')) {
      navbarColor = 'type-fairy';
    } else if (types.includes('fighting')) {
      navbarColor = 'type-fighting';
    } else if (types.includes('ghost')) {
      navbarColor = 'types-ghost';
    } else if (types.includes('grass')) {
      navbarColor = 'type-grass';
    } else if (types.includes('ground')) {
      navbarColor = 'type-ground';
    } else if (types.includes('ice')) {
      navbarColor = 'type-ice';
    } else if (types.includes('normal')) {
      navbarColor = 'type-normal';
    } else if (types.includes('poison')) {
      navbarColor = 'type-poison';
    } else if (types.includes('psychic')) {
      navbarColor = 'type-psychic';
    } else if (types.includes('rock')) {
      navbarColor = 'type-rock';
    } else if (types.includes('steel')) {
      navbarColor = 'type-steel';
    } else if (types.includes('water')) {
      navbarColor = 'type-water';

    } else {
      navbarColor = 'white-nav'; // Color predeterminado si no coincide con ningún tipo conocido
    }

    return navbarColor;
  }

}


