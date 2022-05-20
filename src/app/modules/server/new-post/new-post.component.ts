import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { MainService } from 'src/app/services/main/main.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(
    private api: ApiService,
    private mainService: MainService,
    private router: Router,
    private snackBar: MatSnackBar,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  submitForm(formValue: any) {
    formValue = {
      author: {
        name: this.mainService.getUser().name,
      },
      ...formValue
    }
    const urlParams = this.router.url.split('/')
    const parentType = urlParams[1]
    let parent

    if (parentType === 'p') {
      parent = formValue.author.name
    } else {
      parent = urlParams[2]
    }
    console.log(formValue)
    this.api.postPost(parentType, parent, formValue).subscribe({
      next: () => {
        this.mainService.eventObserver.next('refresh')
        this.location.back();
      },
      error: () => {
        this.snackBar.open('Could not create a post 😕', '', {
          duration: 2500
        });
      }
    })
  }
}
