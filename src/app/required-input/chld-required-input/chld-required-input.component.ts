import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';

@Component({
  selector: 'app-chld-required-input',
  standalone: true,
  imports: [],
  template: `
    <p>
      child-item: {{id()}}
      nextId: {{nextId()}}
    </p>
    <div style="margin-bottom: 20px" [style.background]="bgColor()">
      backgroundColor: {{bgColor()}}
    </div>
    <p>{{text()}}</p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChldRequiredInputComponent {
  //input required
id = input.required<number>({alias: 'id-child'})
  //сomputed signal
nextId = computed(() => this.id() + 1)
  //default value signal + alias
  bgColor = input('cyan', {alias: 'backgroundColor'})
  //transformed signalInput
  text = input.required({
    transform: (v:string) => `transformation text ${v.toLowerCase()}`
  })
}
