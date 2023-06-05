import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { IPokemon, Results } from '../models/JSONinterfaces/pokemon.interface';
import { IPokemonDetail } from '../models/external/pokemonDetail.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  getPokemonType(pokemonId: number) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  getAllPokemon(): Observable<Results> {// devuelto como un arreglo de Ipokemon
    const url = `${this.apiUrl}pokemon?limit=10`;
    return this.http.get<any>(url);
  }
  getPokemonDetailsByName(name: string): Observable<IPokemonDetail[]> {//  devuelto como un arreglo de IpokemonDetail
    const url = `${this.apiUrl}pokemon/${name}`;
    return this.http.get<any>(url);
  }

}


