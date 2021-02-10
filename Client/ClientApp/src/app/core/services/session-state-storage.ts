import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class SessionStateStorageService {

  setItem(key: string, value: any): void {
    if (typeof value == 'object') {
      value = JSON.stringify(value);
    }

    sessionStorage.setItem(key, value);
  }

  getItem(key: string): any {
    let value = sessionStorage.getItem(key);

    return JSON.parse(value);
  }

  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }
}