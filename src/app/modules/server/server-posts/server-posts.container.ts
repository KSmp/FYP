import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post.interface';
import { GroupsService } from 'src/app/services/groups/groups.service';

@Component({
  template: `
    <app-server-posts
      [posts]="posts$ | async"
    ></app-server-posts>
  `,
})
export class ServerPostsContainer implements OnInit {
  posts$: Observable<Post[]>

  constructor(
    private router: Router,
    private service: GroupsService
  ) { }

  ngOnInit(): void {
    const id = this.router.url.split('/')[2]
    this.posts$ = this.service.getPosts(id)
  }
}
