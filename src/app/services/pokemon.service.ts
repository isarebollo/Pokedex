import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Results } from '../models/pokemon.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }

  getAllPokemon(): Observable<any> {
    const url = `${this.apiUrl}pokemon?limit=30`;
    return this.http.get<any>(url);
  }
  getPokemonDetailsByName(name: string): Observable<any> {
    const url = `${this.apiUrl}pokemon/${name}`;
    return this.http.get<any>(url);
  }

}


