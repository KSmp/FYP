import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(true)

  constructor(
    private api: ApiService,
    private router: Router,
  ) { }

  isLoggedIn() {
    return this.loggedIn
  }

  redirectIfLoggedIn() {
    this.isLoggedIn().subscribe( res => {
      if (res) {
        this.router.navigate(['/'])
      }
    })
  }

  navigateToLogin() {
    this.router.navigate(['/login'])
  }

  login(value: any) {
    console.warn('login')
  }

  register(value: any) {
    console.warn('register')
  }
}
