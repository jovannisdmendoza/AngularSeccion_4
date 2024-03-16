import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output()
  public onDelete : EventEmitter<string> = new EventEmitter();
  onDeleteCharacter(index?: string): void{
    //que no emita nada si no existe
    if(!index) return;
    //TODO Emitir el ID del personaje
    console.log({index})
    this.onDelete.emit(index);
  }
}
