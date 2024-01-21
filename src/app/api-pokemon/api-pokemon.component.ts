import {ChangeDetectionStrategy, Component, computed, effect, input, signal} from '@angular/core';
import { IPokemon,getPokemonFn} from "../shared/model/utils/pokemon";
import {Subject, Subscription, takeUntil} from "rxjs";
import {CardComponent} from "../shared/ui/card/card.component";

@Component({
  selector: 'app-api-pokemon',
  standalone: true,
  imports: [
    CardComponent
  ],
  template: `
    <section>
      @if (pokemon(); as currentPokemon ) {
        <app-card>
          <h2 name >{{currentPokemon.name}}</h2>
        </app-card>
      }
      @if (nextPokemon(); as pokemonTwo) {
        <app-card>
          <h2 name>pokemon: {{pokemonTwo.name}}</h2>
        </app-card>
      }
      hello
    </section>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ApiPokemonComponent {
  getPokemon = getPokemonFn()
  private $destroy = new Subject<void>()
  constructor() {
    effect((onCleanup) => {

      this.getPokemon(this.id()).pipe(takeUntil(this.$destroy)).subscribe((p) => {
        this.pokemon.set(p)
      })
      this.getPokemon(this.nextId()).pipe(takeUntil(this.$destroy)).subscribe((p) => {
        this.nextPokemon.set(p)
      })
      onCleanup(() => {
        alert('данные получены')
      })
            });
  }
 id = signal(1)
  nextId = computed<number>(() => this.id() + 1)
  pokemon = signal<IPokemon | undefined>(undefined)
  nextPokemon =  signal<IPokemon | undefined>(undefined)
}
