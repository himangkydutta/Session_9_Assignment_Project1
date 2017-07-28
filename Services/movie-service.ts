import { Injectable } from '@angular/core';
import {IMovieList} from '../Model/movie-list';

@Injectable()
export class MovieService {

  constructor() { }

   moviesList: IMovieList[] = [];

  /** Add movies in the array List. */
  addmovie(moviesDetail: IMovieList) {
    this.moviesList.unshift(moviesDetail);
  }

  /**Get the movies list from the array. */
  getmovie(): IMovieList[] {
    return this.moviesList;
  }

}
