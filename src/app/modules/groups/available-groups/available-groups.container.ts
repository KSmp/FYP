import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from 'src/app/interfaces/group.interface';
import { ApiService } from 'src/app/services/api/api.service';
import { MainService } from 'src/app/services/main/main.service';

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
    private api: ApiService,
    private mainService: MainService,
  ) { }

  ngOnInit(): void {
    this.groups$ = this.api.getAvailableGroups(this.mainService.getUser().name)
  }
}
