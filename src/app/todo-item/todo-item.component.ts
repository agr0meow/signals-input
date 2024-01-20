import {ChangeDetectionStrategy, Component, effect, input as routerInput, OnInit} from '@angular/core';
import {TodosService} from "./model/services/todos.service";

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  template: `
    <section >
      <h4>title:{{ todo()?.title }}</h4>
      <p>id:{{ todo()?.id }}</p>
    </section>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class TodoItemComponent {
  constructor(private _todoService:TodosService) {
    effect(() => {
      this._todoService.getById(this.id())
    });
  }
  public todo = this._todoService.todo


id = routerInput.required<number,number>({
  transform: (i:number):number => Number(i)
})

}
