import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input ('Personaje')
  public characterList: Character[]=[{
    name: 'TRUNKS',
    power: 9
  }]
}
