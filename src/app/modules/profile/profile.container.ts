import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';
import { ApiService } from 'src/app/services/api/api.service';
import { MainService } from 'src/app/services/main/main.service';

@Component({
  templateUrl: './profile.container.html',
  styleUrls: ['./profile/profile.component.scss']
})
export class ProfileContainer implements OnInit {
  user$: Observable<User>
  profileId: string

  constructor(
    private api: ApiService,
    private mainService: MainService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mainService.eventObserver$.subscribe(() => {
      this.getData()
    })

    if (this.route.snapshot.data['type'] !== 'friend') {
      this.profileId = this.mainService.getUser().name
    } else {
      this.profileId = this.router.url.split('/')[2]
    }
    
    this.getData()
  }

  getData() {
    this.user$ = this.api.getUser(this.profileId)
  }
}