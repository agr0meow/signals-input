import {computed, Inject, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ITodo} from "../todo.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  #todos:WritableSignal<ITodo | undefined> = signal(undefined)
  public readonly todo = computed(() => this.#todos())

  constructor(private http:HttpClient) {

  }

  getById(id:number) {
    this.http.get<ITodo>(`https://jsonplaceholder.typicode.com/todos/${id}`).subscribe((t:ITodo) => {
       this.#todos.set(t)
    })
  }
}
