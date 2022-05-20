import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  templateUrl: './profile.container.html',
  styleUrls: ['./profile/profile.component.scss']
})
export class ProfileContainer implements OnInit {
  user$: Observable<User>

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    const profileId = this.api.getProfileId()
    this.user$ = this.api.getUser(profileId)
  }
}