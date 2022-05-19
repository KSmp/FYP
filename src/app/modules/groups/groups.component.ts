import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupsService } from '../../services/groups/groups.service';
import { Group } from '../../interfaces/group.interface';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  userGroups$: Observable<Group[]>

  constructor(
    private service: GroupsService
  ) { }

  ngOnInit(): void {
    this.userGroups$ = this.service.getUserGroups()
  }
}
