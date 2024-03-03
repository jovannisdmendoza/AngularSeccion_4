import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public deleteHero?: string;
  public heroNames : string[] = ['spiderman', 'Iron man', 'SheHulk','hulk', 'thor'];
  removeLastHero(): void{

    this.deleteHero = this.heroNames.pop();
    console.log(this.deleteHero);
  }
}
