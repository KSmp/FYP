import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Post } from 'src/app/interfaces/post.interface';
import { SimpleUser } from 'src/app/interfaces/simple-user.interface';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  saved: any = {}
  loggedUser: SimpleUser
  eventObserver = new Subject<any>();
  eventObserver$ = this.eventObserver.asObservable()
  widgets$ = new BehaviorSubject<any>([])
  server$ = new BehaviorSubject<any>({})
  posts$ = new BehaviorSubject<Post[]>([])

  constructor() { }

  // saveElement(key: string, element: any) {
  //   this.saved[key] = element
  // }

  // getElement(key: string) {
  //   return this.saved[key]
  // }

  saveUser(user: SimpleUser) {
    this.loggedUser = user
    this.saveInLocalStorage('loggedUser', JSON.stringify(user))
  }

  getUser() {
    this.loggedUser = JSON.parse(this.getFromLocalStorage('loggedUser'))
    return this.loggedUser
  }

  saveInLocalStorage(key: string, value: string) {
    localStorage.setItem(key, value)
  }

  getFromLocalStorage(key: string): string {
    return localStorage.getItem(key)
  }

  removeFromLocalStorage(key: string) {
    localStorage.removeItem(key)
  }
}
