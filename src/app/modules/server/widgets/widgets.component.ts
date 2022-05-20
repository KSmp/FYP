import { Component, OnInit } from '@angular/core';
import { AccessLevel, Group } from 'src/app/interfaces/group.interface';
import { Online, User } from 'src/app/interfaces/user.interface';
import { MainService } from 'src/app/services/main/main.service';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  element: Group | User
  widgets: ["edit", "groups", "online", "userCount", "friends", "games", "visibility", "links"]

  Online = Online
  AccessLevel = AccessLevel

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {
    this.element = this.mainService.getElement('server')
    this.widgets = this.mainService.getElement('widgets')
  }

  asUser(val: any): User { return val }
  asGroup(val: any): Group { return val }
}
