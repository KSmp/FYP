import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { MainService } from 'src/app/services/main/main.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() profile: User

  constructor(
    private mainService: MainService,
  ) { }

  ngOnInit(): void {
    this.mainService.saveElement('widgets', ["edit", "online", "groups", "games", "links"])
  }

}
