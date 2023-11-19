import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Movies } from '../class/movies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  
  MoviesFromServer(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/movie');
  }
  MoviesFromServerByName():Observable<any>{
    return this.http.get<any>(
      'http://localhost:8080/api/movie/searchmovie/KGF'
    );
  }
    
}
