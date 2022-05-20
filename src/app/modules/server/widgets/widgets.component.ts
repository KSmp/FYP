import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AccessLevel, Group } from 'src/app/interfaces/group.interface';
import { SimpleUser } from 'src/app/interfaces/simple-user.interface';
import { Online, User } from 'src/app/interfaces/user.interface';
import { ApiService } from 'src/app/services/api/api.service';
import { MainService } from 'src/app/services/main/main.service';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit, OnDestroy {
  element: Group | User
  widgets: ["edit", "groups", "online", "userCount", "friends", "games", "visibility", "links"]
  elementSub: Subscription
  widgetsSub: Subscription
  user: SimpleUser
  type: string

  Online = Online
  AccessLevel = AccessLevel

  tmpStatus: boolean = false

  constructor(
    private mainService: MainService,
    private router: Router,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    this.user = this.mainService.getUser()

    this.type = this.router.url.split('/')[1]

    this.elementSub = this.mainService.server$.subscribe( server => {
      this.element = server
      if (this.type == 'f') {
        if (this.asUser(this.element).friends.includes(this.user.name)) {
          this.tmpStatus = true
        }
      } else if (this.type == 'g') {
        if (this.asGroup(this.element).users.includes(this.user.name)) {
          this.tmpStatus = true
        }
      }
    })

    this.widgetsSub = this.mainService.widgets$.subscribe( widgets => {
      this.widgets = widgets
    })
  }

  ngOnDestroy(): void {
    this.elementSub.unsubscribe()
    this.widgetsSub.unsubscribe()
  }

  asUser(val: any): User { return val }
  asGroup(val: any): Group { return val }

  changeFriendship(name: string, add: boolean) {
    const params = {
      username1: this.user.name,
      username2: name,
      add,
    }

    this.api.addFriend(params).subscribe(res => this.tmpStatus = res.changed)
  }

  changeMembership(name: string, add: boolean) {
    const params = {
      user: this.user.name,
      group: name,
      add,
    }

    this.api.joinGroup(params).subscribe(res => {this.tmpStatus = res.changed; console.log(res.changed)})
  }
}
