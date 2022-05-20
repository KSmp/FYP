import { Component, Input, OnInit } from '@angular/core';
import { Group } from 'src/app/interfaces/group.interface';
import { User } from 'src/app/interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() element: Group | User

  environment = environment

  constructor() { }

  ngOnInit(): void { }

}
