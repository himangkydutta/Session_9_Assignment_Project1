import { Injectable } from '@angular/core';
import {IRating} from '../Model/movie-list';

@Injectable()
export class MovieRating {

 movieRatings:IRating[] =[];

  /** Get the player Type */
  getRatingType() {
    return this.movieRatings = [{
      id: 1,
      title: '*'
    },
    {
      id: 2,
      title: '**'
    }, {
      id: 3,
      title: '***'
    }, {
      id: 4,
      title: '****'
    }, {
      id: 5,
      title: '****'
    }
    ];
  }

}
