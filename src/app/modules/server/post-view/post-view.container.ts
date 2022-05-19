import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post.interface';
import { GroupsService } from 'src/app/services/groups/groups.service';

@Component({
  template: `
    <app-post-view
      [post]="post$ | async"
    ></app-post-view>
  `
})
export class PostViewContainer implements OnInit {
  post$: Observable<Post>

  constructor(
    private router: Router,
    private service: GroupsService,
  ) { }

  ngOnInit(): void {
    const id = this.router.url.split('/')[3]
    this.post$ = this.service.getPostById(id)
  }
}
