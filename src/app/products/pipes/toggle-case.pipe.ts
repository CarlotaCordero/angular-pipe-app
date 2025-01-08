import { Pipe, PipeTransform } from '@angular/core';

// carlota | toggleCase = 'CARLOTA'
// CARLOTA | toggleCase = 'carlota'

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
