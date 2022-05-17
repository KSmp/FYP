import { Component, Input, OnInit } from '@angular/core';
import { Group } from '../../../interfaces/group.interface';

@Component({
  selector: 'app-groups-content',
  templateUrl: './groups-content.component.html',
  styleUrls: ['./groups-content.component.scss']
})
export class GroupsContentComponent implements OnInit {
  @Input() availableGroups: Group[]
  @Input() group: Group

  constructor() { }

  ngOnInit(): void {}
}
