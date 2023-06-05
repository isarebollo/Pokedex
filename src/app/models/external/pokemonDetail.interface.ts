export interface Results {
    forEach(arg0: (result: Results, index: number) => void): unknown;
    results: IPokemonDetail[];
}

export interface IPokemonDetail {
 
    url: any;
    id: number;
    name: string,
    types: Type[];
    height: number,
    weight: number,
    base_experience: number,
    abilities: Ability[];
}
export interface Ability {
    is_hidden: boolean;
    slot: number;
    ability: Species;
}
export interface Species {
    name: string;
    url: string;
}
export interface Type {
    slot: number;
    type: Species;
}