import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { SimpleUser } from 'src/app/interfaces/simple-user.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-server-posts',
  templateUrl: './server-posts.component.html',
  styleUrls: ['./server-posts.component.scss']
})
export class ServerPostsComponent implements OnInit {
  @Input() set posts(posts: Post[]) {
    if(!posts) return

    this.serverPosts = posts
    this.isLoadingPosts = false
  }

  @Input() profile: SimpleUser

  serverPosts: Post[]
  isLoadingPosts = true
  readonly environment = environment 

  constructor() { }

  ngOnInit(): void {}
}
