import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman'
  public age: number = 45;

  get capitalzedName(): string{
    return this.name.toLocaleUpperCase();
  }
  getHeroDescripton(): string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name='Spiderman';
  }

  changeAge():void{
    this.age=15;
  }

  resetForm(){
    this.age = 15;
    this.name = 'iroman';
  }
}
