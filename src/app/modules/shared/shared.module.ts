import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideListComponent } from './side-list/side-list.component';
import { MaterialModule } from './matieral.module';

const declarations = [
  SideListComponent
]

const imports = [
  CommonModule,
  MaterialModule,
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
