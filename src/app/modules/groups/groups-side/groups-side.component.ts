import { Component, Input, OnInit } from '@angular/core';
import { Group } from '../../../interfaces/group.interface';

@Component({
  selector: 'app-groups-side',
  templateUrl: './groups-side.component.html',
  styleUrls: ['./groups-side.component.scss']
})
export class GroupsSideComponent implements OnInit {
  @Input() groups: Group[] = []

  constructor() { }

  ngOnInit(): void { }

}
