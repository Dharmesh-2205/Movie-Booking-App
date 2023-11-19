import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  constructor(private _http:HttpClient) { }

  getScreenDetailsFromServer():Observable<any>{
    return this._http.get<any>('http://localhost:8080/api/screen');
  }

}
