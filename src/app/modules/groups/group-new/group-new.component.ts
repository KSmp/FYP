import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as Editor from 'ckeditor5/build/ckeditor';
import { environment } from 'src/environments/environment';

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
      uploadUrl: environment.apiURL // apiImages
    },
  };

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: '',
      img: '',
      background: '',
    });
  }

  onSubmit(): void {
    if (!this.form.valid) return

    console.warn(this.form.value)
  }
}
