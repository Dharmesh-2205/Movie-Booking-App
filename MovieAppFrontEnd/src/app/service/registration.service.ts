import { Injectable } from '@angular/core';
import { User } from '../class/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private _http: HttpClient) {}
  private loggedInUser = new BehaviorSubject<User | null>(null);

  public loginUserFromJava(user1: User): Observable<any> {
    return this._http.post<any>(
      'http://localhost:8080/api/users/loginuser',
      user1
    );
  }
  public addUser(user1: User): Observable<User> {
    return this._http.post<any>(
      'http://localhost:8080/api/users/registeruser',
      user1
    );
  }
  getLoginUser(): Observable<User | null> {
    return this.loggedInUser.asObservable();
  }

  setLoginUser(user: User | null) {
    this.loggedInUser.next(user);
  }
}
