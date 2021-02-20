import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(movieOverview:string, limit:number): string {
    return movieOverview.substr(0,limit);
  }

}
