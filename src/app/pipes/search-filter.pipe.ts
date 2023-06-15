import { Pipe, PipeTransform } from '@angular/core';
import { IPokemonDetail } from '../models/external/pokemonDetail.interface';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(pokemons: IPokemonDetail[], searchFor: string) {
    if (!pokemons) {
      return [];
    }
    if (searchFor === '' || !searchFor) {
      return pokemons;
    }
    return pokemons.filter(pokemon => pokemon.name.toLowerCase().indexOf(searchFor.toLowerCase()) > -1 || pokemon.id.toString().indexOf(searchFor) > -1);
  }

}
