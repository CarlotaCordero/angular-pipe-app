import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public heroes: Hero[] = [
    {
      name: 'Spiderman',
      color: Color.red,
      canFly: false
    },
    {
      name: 'Black Widow',
      color: Color.black,
      canFly: false
    },
    {
      name: 'Ironman',
      color: Color.red,
      canFly: true
    },
    {
      name: 'Hulk',
      color: Color.green,
      canFly: false
    },
    {
      name: 'Thor',
      color: Color.white,
      canFly: true
    }
  ]

  toggleUpperCase(): void {
    this.isUpperCase = !this.isUpperCase;
  }

  canFly(hero: Hero): void {
    hero.canFly = !hero.canFly;
  }

}
