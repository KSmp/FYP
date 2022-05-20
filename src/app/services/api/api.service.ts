import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post.interface';
import { SimpleUser } from 'src/app/interfaces/simple-user.interface';
import { User } from 'src/app/interfaces/user.interface';
import { environment } from 'src/environments/environment';
import { Group } from '../../interfaces/group.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  endpoint = '/groups/'
  apiUrl = environment.apiURL + this.endpoint
  
  private profileId: string

  constructor(private http: HttpClient) {
    console.warn('CREATED')
    this.setProfile("Cabby")
  }

  getFriends(url: string = ''): Observable<User[]> {
    // return this.http.get<Group[]>(this.apiUrl + url);
    return this.http.get<User[]>("http://localhost:4200/assets/mock/groups.json");
  }

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

  getPosts(id: string, type: string): Observable<Post[]> {
    return this.http.get<Post[]>("http://localhost:4200/assets/mock/posts.json");
  }

  getPostById(id: string): Observable<Post> {
    return this.http.get<Post>("http://localhost:4200/assets/mock/post.json");
  }

  setProfile(id: string) {
    this.profileId = id
  }

  getProfileId() {
    return this.profileId
  }

  getUser(id: string): Observable<User> {
    return this.http.get<User>("http://localhost:4200/assets/mock/user.json");
  }

  getSimpleProfile(): Observable<SimpleUser> {
    return this.http.get<SimpleUser>("http://localhost:4200/assets/mock/simple-user.json");
  }
}
