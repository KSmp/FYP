import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideListComponent } from './side-list/side-list.component';
import { MaterialModule } from './material.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormComponent } from './form/form.component';
import { CancelDialogComponent } from './cancel-dialog/cancel-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { TweetComponent } from './tweet/tweet.component';
import { VotingComponent } from './voting/voting.component';

const declarations = [
  SideListComponent,
  SearchBarComponent,
  FormComponent,
  CancelDialogComponent,
  HeaderComponent,
  TweetComponent,
  VotingComponent,
]

const imports = [
  CommonModule,
  MaterialModule,
  RouterModule,
  CKEditorModule,
  FormsModule,
  ReactiveFormsModule,
]

@NgModule({
  declarations: [
    ...declarations,
  ],
  imports: [
    ...imports,
  ],
  exports: [
    ...declarations,
    ...imports,
  ],
})
export class SharedModule { }
