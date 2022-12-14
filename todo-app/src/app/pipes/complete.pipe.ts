import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'complete'
})
export class CompletePipe implements PipeTransform {

  transform(value: boolean, ...args: unknown[]): string {
    return value ? 'Completed' : 'Pending';
  }

}
