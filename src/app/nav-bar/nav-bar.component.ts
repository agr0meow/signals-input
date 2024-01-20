import { ChangeDetectionStrategy, Component } from '@angular/core';
import {INavigationBar} from "./model/nav";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    RouterLink
  ],
  template: `
    <nav>
      <ul>
        @for (item of navigationItems; track item.name) {
          <li  [routerLink]="item.url">{{item.name}}</li>
        }
      </ul>
    </nav>

  `,
  styles: ``,
})
export class NavBarComponent {
 private _navigationItems:INavigationBar[] = [
    {
      name: 'counter',
      url: '/counter'
    },
    {
      name: 'todoITem',
      url: `/todo/${this.numberInRange()}`
    }
  ]

  get navigationItems(): INavigationBar[] {
    return this._navigationItems;
  }

   numberInRange() {
    return Math.floor(Math.random() * (100 - 1 + 1) + 1);
  }
}
