import { Component, Input, OnInit } from '@angular/core';
import { Group } from 'src/app/interfaces/group.interface';
import { User } from 'src/app/interfaces/user.interface';
import { MainService } from 'src/app/services/main/main.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  @Input() set element(server: Group | User) {
    if(!server) return
    
    this.server = server
    this.mainService.server$.next(server)
    this.mainService.posts$.next(server.posts)
    this.isLoading = false
  }

  environment = environment
  server: Group | User
  isLoading = true

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit(): void {}
}
