import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
//import { UserProfile } from "../login.model";

@Injectable()
export class LoginService {
  private baseUrl = '';

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get(this.baseUrl + 'weatherforecast/GetTest');
  }
}
