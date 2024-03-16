import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid } from 'uuid';
@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    {
    id: uuid(),
    name:'KRILIN',
    power: 1000
    },{
      id: uuid(),
      name: 'GOKU',
      power: 9600
    },
    {
      id: uuid(),
      name: 'VEGETA',
      power: 9600
    }
  ];

  // esta recibiendo el evento del hijo al padre
  onNewCharacter(characters : Character):void{

    // le esta diciendo que tome todas las propiedades que recibe y las esparsa en el nuevo objeto con
    // el operador ...character
    const newCharacter : Character = {id: uuid(), ...characters}
    this.characters.push(newCharacter)
    console.log("MainPage");
    console.log (newCharacter);
  }

  //this.characters.splice(index,1);
  //onDeletCharacter(index:number):void{
  onDeletCharacter(id:string):void{
      this.characters= this.characters.filter( character => character.id !== id);
  }
}
