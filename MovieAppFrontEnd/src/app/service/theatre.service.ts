import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TheatreService {
  constructor(private _http: HttpClient) {}

  TheatresFromServer(): Observable<any> {
    return this._http.get<any>('http://localhost:8080/api/theatre');
  }

  TheatresByCityFromServer(theatreCity:any): Observable<any> {
    return this._http.get<any>(
      `http://localhost:8080/api/theatre/${theatreCity}`
    );
  }
}
