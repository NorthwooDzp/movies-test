import { IMovie } from './movie';

export interface IMoviesResponse {
  page: number;
  results: IMovie[];
}
