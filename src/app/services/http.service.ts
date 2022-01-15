import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { IMovie, IMoviesResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  public getMovies(page: number): Observable<IMovie[]> {
    const params: HttpParams = new HttpParams(
      {
        fromObject: {
          api_key: environment.apiKey,
          page
        }
      }
    );
    return this.http.get<IMoviesResponse>(environment.apiUrl, {params: params})
      .pipe(
        map(response => response.results)
      );
  }
}
