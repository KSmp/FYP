import { Component, Input, OnInit } from '@angular/core';
import { Group } from 'src/app/interfaces/group.interface';
import { User } from 'src/app/interfaces/user.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() element: Group | User

  readonly environment = environment

  constructor() { }

  ngOnInit(): void {}

}
