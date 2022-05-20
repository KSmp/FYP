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
  readonly apiUrl = environment.apiURL

  constructor(private http: HttpClient) { }

  login(formValue: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/login', formValue)
  }

  register(formValue: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/register', formValue)
  }

  getFriends(name: string): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl + '/friends/' + name);
  }

  getAvailableGroups(name: string): Observable<Group[]> {
    return this.http.get<Group[]>(this.apiUrl + '/available-groups/' + name);
  }

  getUserGroups(name: string): Observable<Group[]> {
    return this.http.get<Group[]>(this.apiUrl + '/user-groups/' + name);
  }

  getGroup(name: string): Observable<Group> {
    return this.http.get<Group>(this.apiUrl + '/groups/' + name);
  }

  getPost(parentType: string, parent: string, title: string): Observable<Post> {
    return this.http.get<Post>(this.apiUrl + '/post/' + parentType + '/' + parent + '/' + title);
  }

  getUser(name: string): Observable<User> {
    return this.http.get<User>(this.apiUrl + '/user/' + name);
  }

  postPost(parentType: string, parent: string, body: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/create-post/' + parentType + '/' + parent, body)
  }

  createGroup(groupProps: any) {
    return this.http.post<User>(this.apiUrl + '/create-group', groupProps);
  }

  editGroup(group: string, groupParams: any) {
    return this.http.post<any>(this.apiUrl + '/edit-group/' + group, groupParams);
  }

  editUser(user: string, userParams: any) {
    return this.http.post<any>(this.apiUrl + '/edit-user/' + user, userParams);
  }

  joinGroup(params: any) {
    return this.http.post<any>(this.apiUrl + '/join-group', params);
  }

  addFriend(params: any) {
    return this.http.post<any>(this.apiUrl + '/add-friend', params);
  }
}
