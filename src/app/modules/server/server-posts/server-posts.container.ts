import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post.interface';
import { SimpleUser } from 'src/app/interfaces/simple-user.interface';
import { MainService } from 'src/app/services/main/main.service';

@Component({
  template: `
    <app-server-posts
      [posts]="posts$ | async"
      [profile]="profile"
    ></app-server-posts>
  `,
})
export class ServerPostsContainer implements OnInit {
  posts$: Observable<Post[]>
  profile: SimpleUser

  constructor(
    private mainService: MainService,
  ) { }

  ngOnInit(): void {
    this.posts$ = this.mainService.posts$
    this.profile = this.mainService.getUser()
  }
}
