import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent   {
  constructor( private dbzSerivices: DbzService){}

  get characters(): Character[]{
    return [...this.dbzSerivices.characters];
  }

  onDeleteCharacter(id: string): void{
    this.dbzSerivices.onDeletCharacter(id);
  }

  addCharacter(character: Character) :void{
    this.dbzSerivices.onNewCharacter(character);
  }
}

