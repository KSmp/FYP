import { Component, OnInit } from '@angular/core';
import { GroupsService } from '../groups.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  constructor(
    private service: GroupsService
  ) { }

  ngOnInit(): void {
    this.service.getMany().subscribe({
      next: msg => {
        console.warn(msg)
      }
    })
    console.warn()
  }

}
