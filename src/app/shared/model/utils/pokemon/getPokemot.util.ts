import { HttpClient } from '@angular/common/http';
import { assertInInjectionContext, inject } from '@angular/core';
import {IPokemon} from "./pokemon.interface";

export function getPokemonFn() {
  assertInInjectionContext(getPokemonFn);
  const httpClient = inject(HttpClient);
  const URL = `https://pokeapi.co/api/v2/pokemon`;

  return function (id: number) {
    return httpClient.get<IPokemon>(`${URL}/${id}`)
  }
}
