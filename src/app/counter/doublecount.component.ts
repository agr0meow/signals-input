import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Input,
  input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-double-count',
  standalone: true,
  imports: [],
  template: `
    <h1>
      counter works!
      count: {{ doubleCount() }}
    </h1>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class DoublecountComponent {

  //#TODO solution one
//   private _doubleCount = 0;
//
//   get doubleCount(): number {
//     return this._doubleCount;
//   }
//
//   set doubleCount(value: number) {
//     this._doubleCount = value;
//   }
//
//   @Input({required: true}) set counter (c:number) {
//   this.doubleCount = c  * 2
// }
  //#TODO solution two
  // counter = input.required<number>()
  // doubleCount = computed(() => this.counter() * 2)
//#TODO solution three
  doubleCount = input<number, number>(0,{
    alias: 'counter',
    transform: (c) =>  c ? c* 2 : 0
  })
}

