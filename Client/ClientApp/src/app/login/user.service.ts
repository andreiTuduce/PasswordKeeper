import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserLogin,  UserRegister } from "./login.model";

@Injectable()
export class UserService {
  private baseUrl = 'user';
  
  constructor(private http: HttpClient) { }

  saveUser(userProfile: UserRegister): Observable<any> {
    return this.http.post(this.baseUrl + '/SaveUser', userProfile);
  }

  loadUser(userLogin: UserLogin): Observable<UserRegister> {
    return this.http.post<UserRegister>(this.baseUrl + '/LoadProfile', userLogin);
  }
}