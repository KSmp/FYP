import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from '../../interfaces/group.interface';
import { ApiService } from 'src/app/services/api/api.service';
import { MainService } from 'src/app/services/main/main.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {
  userGroups$: Observable<Group[]>

  constructor(
    private api: ApiService,
    private mainService: MainService,
  ) { }

  ngOnInit(): void {
    this.mainService.eventObserver$.subscribe(() => {
      this.getData()
    })
    this.getData()
  }

  getData() {
    this.userGroups$ = this.api.getUserGroups(this.mainService.getUser().name)
  }
}
