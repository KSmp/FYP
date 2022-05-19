import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/comments.interface'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() comments: Comment[]

  readonly environment = environment

  constructor() { }

  ngOnInit(): void {}

}
