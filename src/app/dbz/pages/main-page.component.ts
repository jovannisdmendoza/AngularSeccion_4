import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent   {
  public characters: Character[] = [
    {name:'KRILIN',
    power: 1000
    },{
      name: 'GOKU',
      power: 9600
    },
    {
      name: 'VEGETA',
      power: 9600
    }
  ];
}
