import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Group } from 'src/app/interfaces/group.interface';
import { Post } from 'src/app/interfaces/post.interface';
import { GroupsService } from 'src/app/services/groups/groups.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  group$: Observable<Group>
  // posts$: Observable<Post[]>

  constructor(
    private router: Router,
    private service: GroupsService
  ) { }

  ngOnInit(): void {
    const id = this.router.url.split('/')[2]
    this.group$ = this.service.getGroup(id)
    // this.posts$ = this.service.getPosts(id)
  }
}
