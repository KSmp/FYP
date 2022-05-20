import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-friends-grid',
  templateUrl: './friends-grid.component.html',
  styleUrls: ['./friends-grid.component.scss']
})
export class FriendsGridComponent implements OnInit {
  @Input() friends: User[]

  constructor() { }

  ngOnInit(): void {
  }

}
