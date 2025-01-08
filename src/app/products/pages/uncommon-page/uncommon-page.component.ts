import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18n Select
  public name: string = 'Carlota';
  public gender: 'male'|'female' = 'female';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  };

  changeClient(): void {
    this.name = 'Fernando';
    this.gender = 'male';
  }

  //i18n Plural
  public clients: string[] = ['Carlota', 'Fernando', 'María', 'Juan', 'Pedro', 'Ana', 'Luis'];
  public clientsMap = {
    '=0': 'no tenemos hay ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  };

  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Fernando',
    age: 35,
    address: 'Ottawa, Canada'
  };

  //Async Pipe
  public myObservableTimer = interval(1000)

  public promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 3500);
  });

}
