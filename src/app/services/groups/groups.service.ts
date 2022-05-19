import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post.interface';
import { environment } from 'src/environments/environment';
import { Group } from '../../interfaces/group.interface';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  endpoint = '/groups/'
  apiUrl = environment.apiURL + this.endpoint

  constructor(private http: HttpClient) { }

  getAvailableGroups(url: string = ''): Observable<Group[]> {
    // return this.http.get<Group[]>(this.apiUrl + url);
    return this.http.get<Group[]>("http://localhost:4200/assets/mock/groups.json");
  }

  getUserGroups() {
    return this.http.get<Group[]>("http://localhost:4200/assets/mock/groups.json");
  }

  getGroup(url: string): Observable<Group> {
    // return this.http.get<Group>(this.apiUrl + url);
    return this.http.get<Group>("http://localhost:4200/assets/mock/group.json");
  }

  getPosts(id: string): Observable<Post[]> {
    return this.http.get<Post[]>("http://localhost:4200/assets/mock/posts.json");
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>("http://localhost:4200/assets/mock/post.json");
  }
}
