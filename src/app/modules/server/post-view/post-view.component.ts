import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {
  @Input() set post(post: Post) {
    if(!post) return

    this._post = post
    this.isLoading = false
  }

  _post: Post
  isLoading: boolean = true

  constructor() { }

  ngOnInit(): void {}
}
