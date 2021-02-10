import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Password, Site } from './home.model';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  private baseUrl = 'home';

  constructor(private http: HttpClient) { }

  getSites(userID: string): Observable<Site[]> {
    return this.http.post<Site[]>(this.baseUrl + '/ListSites', { userID });
  }

  getPassword(siteID: string): Observable<Password> {
    return this.http.get<Password>(this.baseUrl + `/GetPassword/${siteID}`,);
  }

  addSite(site: Site): Observable<any> {
    return this.http.post(this.baseUrl + '/AddSite', site);
  }

  addPassword(password: Password): Observable<any> {
    return this.http.post(this.baseUrl + '/AddPassword', password);
  }
}