import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>Counter: {{counter}} </p>
  <button (click)="increaseBy(-stepNumber)">- {{stepNumber}} </button>
  <button (click)="increaseBy(+stepNumber)">+ {{stepNumber}} </button>
  <button (click)="reset()"> RESET </button>
  `,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public counter: number = 12;
  public stepNumber: number = 6;

  increaseBy( value: number ): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 12;
  }
}
