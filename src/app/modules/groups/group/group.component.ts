import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Group } from 'src/app/interfaces/group.interface';
import { ApiService } from 'src/app/services/api/api.service';
import { MainService } from 'src/app/services/main/main.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  group$: Observable<Group>

  constructor(
    private router: Router,
    private api: ApiService,
    private mainService: MainService,
  ) { }

  ngOnInit(): void {
    const id = this.router.url.split('/')[2]
    this.group$ = this.api.getGroup(id)
    this.mainService.saveElement('widgets', ["edit", "visibility", "userCount", "games"])
  }
}
