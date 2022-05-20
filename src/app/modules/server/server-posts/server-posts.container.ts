import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post.interface';
import { SimpleUser } from 'src/app/interfaces/simple-user.interface';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  template: `
    <app-server-posts
      [posts]="posts$ | async"
      [profile]="profile$ | async"
    ></app-server-posts>
  `,
})
export class ServerPostsContainer implements OnInit {
  posts$: Observable<Post[]>
  profile$: Observable<SimpleUser>

  constructor(
    private router: Router,
    private api: ApiService,
  ) { }

  ngOnInit(): void {
    const id = this.router.url.split('/')[2]
    const type = this.router.url.split('/')[1]
    this.posts$ = this.api.getPosts(id, type)
    this.profile$ = this.api.getSimpleProfile()
  }
}
