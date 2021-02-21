import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(movieOverview:string, limit:number, movie:any): string {
    console.log(movie.flag)
    if(!movie.flag){
      return movieOverview.substr(0,limit);
    }
    else{ 
      return movieOverview;
    }
  }
}
