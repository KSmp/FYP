import { Component, Input, OnInit } from '@angular/core';
import { Group } from 'src/app/interfaces/group.interface';
import { Post } from 'src/app/interfaces/post.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  @Input() set element(server: Group) {
    if(!server) return

    this.server = server
    this.isLoading = false
  }

  environment = environment
  server: Group
  isLoading = true

  constructor() { }

  ngOnInit(): void {}
}
