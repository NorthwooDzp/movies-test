import { Injectable } from '@angular/core';
import { IMovie } from '../models';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private movies: IMovie[] = [];
  private movPerPage: number = 20;

  constructor(private httpService: HttpService) {
  }

  public getMovies(page: number): Promise<IMovie[]> {
    const startIndex: number = (page * this.movPerPage) - this.movPerPage;
    const endIndex: number = (page * this.movPerPage) - 1;

    return new Promise((resolve) => {
      if (this.haveMoviesData(startIndex, endIndex)) {
        resolve(this.movies.filter((mov, i) => i <= endIndex && i >= startIndex));
      } else {
        console.log('get movies');
        this.httpService.getMovies(page)
          .subscribe(movies => {
            let index = startIndex;
            movies.forEach(movie => {
              this.movies[index] = movie;
              index++;
            });
            resolve(movies);
          });
      }
    });
  }

  private haveMoviesData(start: number, end: number): boolean {
    const targetMovies = this.movies.filter((mov, i) => i >= start && i <= end);
    return !!targetMovies.length && targetMovies.every(mov => mov.id);
  }

}
