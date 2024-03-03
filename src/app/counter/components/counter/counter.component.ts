import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3> EL CONTADOR ES : {{contador}}</h3>

  <button (click)="Inholajovannis(1)">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="Inholajovannis(-1)">-1</button>
  `
})

export class CounterComponent  {
  public  title: string = 'HOLA RICARDO';
  public contador  : number =10;

  Inholajovannis(value: number): void {
    this.contador+=value;
  }

  reset():void{
    this.contador=10;
  }


}
