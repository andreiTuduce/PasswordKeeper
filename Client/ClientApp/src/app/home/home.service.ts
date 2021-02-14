import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Password, Site } from './home.model';

@Injectable({
  providedIn: 'root'
})

export class HomeService {
  $observableWay: Observable<string>;

  private baseUrl = 'home';

  private observableWaySubject: BehaviorSubject<string> = new BehaviorSubject<string>("init");

  constructor(private http: HttpClient) {
    this.$observableWay = this.observableWaySubject.asObservable();
  }

  getSites(userID: string): Observable<Site[]> {
    return this.http.post<Site[]>(this.baseUrl + '/GetSites', { userID });
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

  sentViaService(stringValue: string) {
    this.observableWaySubject.next(stringValue);
  }
}