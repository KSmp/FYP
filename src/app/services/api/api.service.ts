import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from './interfaces/api-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // get(url: string): Observable<ApiResponse<T>> {
  //   return this.http.get<ApiResponse<T>>(url);
  // }
}
