import { Component, OnInit, Input } from '@angular/core';
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
  
  constructor(_MoviesService:MoviesService) {
    _MoviesService.getMovies().subscribe(response => {
      this.allData = response.results;

      for (var i=0; i<this.allData.length; i++){

        for(var j=1; j<=Math.round(this.allData[i].vote_average); j++){
         this.stars.push(j);
        }

        this.allData[i].voteStars=this.stars;
        this.stars=[];
      }

      for (var i=0; i<this.allData.length; i++){
        this.allData[i].moviesOverview= this.allData[i].overview;
      }
     
      
    })
  }
  ngOnInit(): void {
  }

}
