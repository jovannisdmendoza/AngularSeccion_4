import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

    //Crear una propiedad Tipo  EventEmitter que es un Generico <T> de Angular Core
    @Output()
    onNewCharacter : EventEmitter<Character> = new EventEmitter();

    //Cre un objeto que hereda de la Interface Character
    public character : Character = {
      name: '',
      power:0,
    }

    // este metodo es llamado en el formulario para emitir
    // el evento de tipo Character con nombre OnNewCharacter, pero antes de eso hace unas validaciones
    // de si recibe un nombre o no si existe el nombre del character
    //lo envia el personaje a travez del evento de onNewCharacter
    emitCharacter(): void{
      //Sirve para detener la aplicacion y hacer un seguimiento

      if( this.character.name.length ===0) return;

      this.onNewCharacter.emit(this.character);
      this.character = { name : '', power: 0};
    }
}




