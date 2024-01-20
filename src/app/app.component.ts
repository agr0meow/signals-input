import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import DoublecountComponent from "./counter/doublecount.component";
import {NavBarComponent} from "./nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DoublecountComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'signal-inputs';
  private _counter = 0;

  get counter(): number {
    return this._counter;
  }

  set counter(value: number) {
    this._counter = value;
  }

  increment() {
  return  this.counter = this.counter+ 1

  }
  decrement() {
  return   this.counter =  this.counter - 1

  }

}
