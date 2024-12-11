import { NgModule } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { Menubar, MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [],
  imports: [
    MenuModule,
    MenubarModule,
  ],
  exports: [
    MenuModule,
    MenubarModule,
  ]
})
export class PrimeNgModule { }
