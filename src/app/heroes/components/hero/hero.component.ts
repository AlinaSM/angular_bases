import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 50;
  public valueInput : any = 'Hola';

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(name : string): void {
    this.name = name;
  }

  changeAge(age : number): void {
    this.age = age;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 50;
  }
  
}
