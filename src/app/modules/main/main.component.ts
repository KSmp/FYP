import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  showToolbar: boolean

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void { 
    this.authService.isLoggedIn().subscribe(res => {
      this.showToolbar = res
    })
  }

}
