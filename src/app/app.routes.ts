import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'counter', loadComponent: () => import("./counter/doublecount.component")},
  {
    path: "todo/:id", pathMatch: 'full',loadComponent: () => import("./todo-item/todo-item.component")
  }
  ]
