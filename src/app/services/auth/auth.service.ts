import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { ApiService } from '../api/api.service';
import { MainService } from '../main/main.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInSub : Subscription
  loggedIn = new BehaviorSubject<boolean>(false)

  constructor(
    private api: ApiService,
    private mainService: MainService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  redirectIfLoggedIn() {
    this.checkIfIsAlreadyLoggedIn()
  
    this.loggedInSub = this.loggedIn.subscribe( res => {
      if (res) {
        this.router.navigate(['/'])
      }
    })
  }

  checkIfIsAlreadyLoggedIn() {
    if (this.mainService.getFromLocalStorage('loggedUser')) {
      this.loggedIn.next(true)
    }
  }

  usubscribeFromRedirection() {
    this.loggedInSub.unsubscribe()
  }

  navigateToLogin() {
    this.router.navigate(['/login'])
  }

  login(value: any) {
    this.api.login(value).subscribe({
      next: res => {
        if (res.isLoggedIn) {
          this.api.getUser(res.name).subscribe(user => {
            this.mainService.saveUser({ name: user.name, img: user?.img })
            this.loggedIn.next(true)
          })
        } else {
          this.snackBar.open('Login failed 😕', '', {
            duration: 2500
          });
        }
      },
      error: er => {
        this.snackBar.open('Login failed 😕', '', {
          duration: 2500
        });
      }
    })
  }

  register(value: any) {
    this.api.register(value).subscribe({
      next: res => {
        if (res.created) {
          this.navigateToLogin()
          this.snackBar.open('User created 😃', '', {
            duration: 2500
          });
        } else {
          this.snackBar.open('Registration failed 😕 Try different username', '', {
            duration: 2500
          });
        }
      },
      error: er => {
        this.snackBar.open('Registration failed 😕', '', {
          duration: 2500
        });
      }
    })
  }

  logout() {
    this.mainService.removeFromLocalStorage('loggedUser')
    this.loggedIn.next(false)
  }
}
