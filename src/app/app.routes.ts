import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'counter', loadComponent: () => import("./counter/doublecount.component")},
  {
    path: "todo/:id", pathMatch: 'full',loadComponent: () => import("./todo-item/todo-item.component")
  },
  {
    path: 'required-input', loadComponent: () => import("./required-input/required-input.component")
  },
  {
    path: 'pokemons', loadComponent: () => import("./api-pokemon/api-pokemon.component")
  }
  ]
