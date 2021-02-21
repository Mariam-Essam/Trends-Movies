import { Component, HostListener, OnInit, Input } from '@angular/core';
import {MoviesService} from '../movies.service'

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.scss']
})
export class TrendsComponent implements OnInit {

  @Input() public partntData:string;

  searchTxt:any;
  allData:any[];
  stars:any[]=[];
  flag:boolean=false;
  movieOverview:string="";
  constructor(_MoviesService:MoviesService) {
    _MoviesService.getMovies().subscribe(response => {
      this.allData = response.results;

      for (let i=0; i<this.allData.length; i++){

        for(let j=1; j<=Math.round(this.allData[i].vote_average); j++){
         this.stars.push(j);
        }

        this.allData[i].voteStars=this.stars;
        this.stars=[];
      }
      let flagData = []
      for (var i=0; i<this.allData.length; i++){
        this.allData[i].moviesOverview= this.allData[i].overview;
        let data = {...this.allData[i], flag:false}
        flagData.push(data)
      }
      this.allData = flagData;
    })
  }
  ngOnInit(): void {
  }
  value = "";
  @HostListener('click', ['$event'])  
  seemoreFun = (movie) => {
    movie.flag = !movie.flag;
    console.log(movie.flag)
  }
}
