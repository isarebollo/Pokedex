import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  getPokemonType(pokemonId: number) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  getAllPokemon(): Observable<any> {
    const url = `${this.apiUrl}pokemon?limit=50`;
    return this.http.get<any>(url);
  }
  getPokemonDetailsByName(name: string): Observable<any> {
    const url = `${this.apiUrl}pokemon/${name}`;
    return this.http.get<any>(url);
  }

}


