import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from '../../models';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  @Input() public movie!: IMovie;

  constructor() { }

  ngOnInit(): void {
  }

}
