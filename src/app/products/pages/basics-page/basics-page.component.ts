import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'carlota';
  public nameUpper: string = 'CARLOTA';
  public fullName: string = 'CaRlOtA';

}
