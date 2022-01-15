import { Component, OnInit } from '@angular/core';
import { IMovie } from '../../models';
import { StoreService } from '../../services';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  public currentPage: number = 1;
  public movies?: IMovie[];

  constructor(private store: StoreService) { }

  ngOnInit(): void {
   this.loadMovies()
  }

  public onPageChange(num: number): void {
    this.currentPage = num;
    console.log(this.currentPage);
    this.loadMovies()
  }

  private loadMovies() {
    this.store.getMovies(this.currentPage)
      .then(movies => this.movies = movies);
  }

}
