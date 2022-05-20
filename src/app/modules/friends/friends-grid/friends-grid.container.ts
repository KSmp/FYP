import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  template: `
    <app-friends-grid
      [friends]="friends$ | async"
    ></app-friends-grid>
  `,
})
export class FriendsGridContainer implements OnInit {
  friends$: Observable<User[]>

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.friends$ = this.api.getFriends()
  }
}
