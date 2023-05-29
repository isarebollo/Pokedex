import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Results } from '../models/pokemon.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  obtenerPokemons(): Observable<any> {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/`)

  }

}


