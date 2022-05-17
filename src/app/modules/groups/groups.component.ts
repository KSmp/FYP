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
  availableGroups$: Observable<Group[]>
  userGroups$: Observable<Group[]>
  group$: Observable<Group>

  constructor(
    private service: GroupsService
  ) { }

  ngOnInit(): void {
    this.loadUserGroups()
    this.loadAvailableGroups()
  }

  loadUserGroups() {
    this.userGroups$ = this.service.getUserGroups()
  }

  loadAvailableGroups() {
    this.availableGroups$ = this.service.getAvailableGroups()
  }

  loadGroup(id: string) {
    this.group$ = this.service.getGroup(id)
  }
}
