import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post.interface';
import { ApiService } from 'src/app/services/api/api.service';
import { MainService } from 'src/app/services/main/main.service';

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
    private api: ApiService,
    private mainService: MainService,
  ) { }

  ngOnInit(): void {
    const urlParams = this.router.url.split('/')

    const parentType = urlParams[1]
    let parent
    let title
    if (parentType === 'p') {
      parent = this.mainService.getUser().name
      title = urlParams[2]
    } else {
      parent = urlParams[2]
      title = urlParams[3]
    }
    
    this.post$ = this.api.getPost(parentType, parent, title)
  }
}
