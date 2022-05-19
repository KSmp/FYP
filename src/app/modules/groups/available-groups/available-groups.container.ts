import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from 'src/app/interfaces/group.interface';
import { GroupsService } from 'src/app/services/groups/groups.service';

@Component({
  template: `
    <app-available-groups
      [groups]="groups$ | async"
    ></app-available-groups>
  `,
})
export class AvailableGroupsContainer implements OnInit {
  groups$: Observable<Group[]>

  constructor(
    private groupService: GroupsService
  ) { }

  ngOnInit(): void {
    this.groups$ = this.groupService.getAvailableGroups()
  }
}
