import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CancelDialogComponent } from '../cancel-dialog/cancel-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import * as Editor from 'ckeditor5/build/ckeditor';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  excerpt = false;

  @Input() set item(item: Post) {
    if (item.hasOwnProperty('excerpt')) {
      this.form.addControl('excerpt', new FormControl(''));
      this.excerpt = true;
    }
    this.form.patchValue({...item});
  }

  @Output() submitForm = new EventEmitter<FormGroup> ();
  public Editor = Editor;
  form: FormGroup;
  editorConfig = {
    placeholder: 'Treść',
    simpleUpload: {
      uploadUrl: environment.apiURL // apiImages
    },
    title: {
      placeholder: "adsasd"
    }
  };

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private location: Location,
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      content: '',
    });
   }

  ngOnInit(): void { }

  onSubmit(): void {
    this.submitForm.emit(this.form.value);
  }

  cancel(): void {
    const dialogRef = this.dialog.open(CancelDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.location.back();
      }
    });
  }
}
