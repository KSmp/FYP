import { Component, Input, OnInit } from '@angular/core';
import { Group } from 'src/app/interfaces/group.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-available-groups',
  templateUrl: './available-groups.component.html',
  styleUrls: ['./available-groups.component.scss']
})
export class AvailableGroupsComponent implements OnInit {
  @Input() groups: Group[]

  newGroup: Group = {
    slug: "new",
    name: "Create new group",
    img: environment.appURL + "assets/plus.jpg",
    usersCount: null,
    access: null,
    games: null,
    posts: [],
    description: "",
    owner: "",
    background: environment.appURL + "assets/generic.jpg",
    users: [],
  }

  constructor() { }

  ngOnInit(): void {}

}
