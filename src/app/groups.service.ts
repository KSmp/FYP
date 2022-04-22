import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Group } from './interfaces/group.interface';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  endpoint = '/groups/'
  apiUrl = environment.apiURL + this.endpoint

  constructor(private http: HttpClient) { }

  getMany(url: string = ''): Observable<Group[]> {
    // return this.http.get<Group[]>(this.apiUrl + url);
    return this.http.get<Group[]>("../../mock/games.json");
  }

  get(url: string): Observable<Group> {
    return this.http.get<Group>(this.apiUrl + url);
  }
}
