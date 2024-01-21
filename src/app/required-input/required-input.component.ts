import { ChangeDetectionStrategy, Component } from '@angular/core';
import {ChldRequiredInputComponent} from "./chld-required-input/chld-required-input.component";
import generate from "../shared/model/utils/generateRandom";

@Component({
  selector: 'app-required-input',
  standalone: true,
  imports: [
    ChldRequiredInputComponent
  ],
  template: `
    <section>
      <h1>required child input</h1>
      <button (click)="change()">change id</button>
      <app-chld-required-input [id-child]="id" backgroundColor="lightgray" text="ПРивет мир!"></app-chld-required-input>
    </section>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class RequiredInputComponent {
private _id:number = 1

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }
  change () {
    this.id =  generate(1,100)
  }
}
