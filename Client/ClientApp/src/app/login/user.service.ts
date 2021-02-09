import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserProfile } from "./login.model";

@Injectable()
export class UserService {
  private baseUrl = 'user';
  
  constructor(private http: HttpClient) { }

  saveUser(userProfile: UserProfile): Observable<any> {
    return this.http.post(this.baseUrl + '/SaveUser', userProfile);
  }

  loadUser(userLogin: UserProfile): Observable<UserProfile> {
    return this.http.post<UserProfile>(this.baseUrl + '/LoadUser', userLogin);
  }
}