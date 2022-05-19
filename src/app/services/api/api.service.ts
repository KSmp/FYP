import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  steam() {
    return this.http.get("http://api.steampowered.com/ISteamApps/GetAppList/v0002/?format=json")
  }

  // get(url: string): Observable<ApiResponse<T>> {
  //   return this.http.get<ApiResponse<T>>(url);
  // }
}
