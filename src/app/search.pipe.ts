import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movies: any[], searchTxt:string): any {
    if(searchTxt==undefined){
      return movies;
    }
    return movies.filter(function(movies){
      return movies.title.toLowerCase().includes(searchTxt.toLowerCase());
    })
  }

}
