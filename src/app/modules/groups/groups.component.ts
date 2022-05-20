import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../../interfaces/group.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  userGroups$: Observable<Group[]>

  constructor(
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.userGroups$ = this.api.getUserGroups()
  }
}
