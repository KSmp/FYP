import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as Editor from 'ckeditor5/build/ckeditor';
import { ApiService } from 'src/app/services/api/api.service';
import { MainService } from 'src/app/services/main/main.service';
import { environment } from 'src/environments/environment';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-group-new',
  templateUrl: './group-new.component.html',
  styleUrls: ['./group-new.component.scss']
})
export class GroupNewComponent implements OnInit {
  readonly environment = environment
  form: FormGroup;
  img = Editor
  background = Editor
  editorConfig = {
    toolbar: [ 'imageUpload' ],
    simpleUpload: {
      uploadUrl: environment.imagesURL
    },
  };
  type: string

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private mainService: MainService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: '',
      img: '',
      background: '',
      games: '',
    });

    this.type = this.route.snapshot.data['type']
    if (this.type !== 'new-group') this.form.patchValue({ name: 'name' })
  }

  onSubmit(): void {
    if (!this.form.valid) return

    let formValue = {
      ...this.form.value,
      img: this.purifyPath(this.form.value.img),
      background: this.purifyPath(this.form.value.background),
      owner: this.mainService.getUser().name
    }

    let apiCall: Observable<any>

    console.log(this.type)

    if (this.type == 'new-group') {
      apiCall = this.api.createGroup(formValue)
    } else if (this.type == 'group') {
      apiCall = this.api.editGroup(this.router.url.split('/')[2], formValue)
    } else if (this.type == 'user') {
      apiCall = this.api.editUser(this.mainService.getUser().name, formValue)
    }

    console.log(apiCall)

    apiCall.subscribe({
      next: () => {
        this.mainService.eventObserver.next('refresh')
        this.location.back();
      },
      error: () => {
        this.snackBar.open('An error occured 😕', '', {
          duration: 2500
        });
      }
    })
  }

  purifyPath(path: string) {
    path = path.replace('<figure class="image"><img src="', "")
    path = path.replace('"></figure>', "")
    return path
  }
}
