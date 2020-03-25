import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'http://www.omdbapi.com/?apikey=2d1cf472';
  constructor(
    private http: HttpClient
  ) { }

  serarchMovies(searchTerms: string): Observable<any> {
    return this.http.get(this.baseUrl, { params: { s: searchTerms } });
  }

  getMovieDetails(imdbID: string): Observable<any> {
    return this.http.get(this.baseUrl, { params: { i: imdbID } })
  }
}
