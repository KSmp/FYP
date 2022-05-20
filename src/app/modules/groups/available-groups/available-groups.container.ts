import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from 'src/app/interfaces/group.interface';
import { ApiService } from 'src/app/services/api/api.service';

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
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.groups$ = this.api.getAvailableGroups()
  }
}
