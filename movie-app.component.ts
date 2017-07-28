import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import {IMovieList,IRating} from './Model/movie-list';
import {MovieService} from './Services/movie-service';
import {MovieRating} from './Services/movie-title.service'

@Component({
  selector: 'movie-root',
  templateUrl: './views/movie-app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [MovieService,MovieRating]
})

export class MovieComponent implements OnInit {
  
  //two way binding of Movies
    currentMovie:IMovieList = new IMovieList();

    // List of movies.
    movieList: Array<IMovieList> = new Array<IMovieList>();

    // Title list array
    movieTitlList:IRating[]=[];

    constructor(private _serviceList:MovieService,private _serviceDropDown: MovieRating){
    }

    ngOnInit(){
        this.movieList = this._serviceList.getmovie();
        this.movieTitlList = this._serviceDropDown.getRatingType();
    }

    AddMovieDet(){
        this._serviceList.addmovie(this.currentMovie);
        this.currentMovie = new IMovieList();
    }

}
