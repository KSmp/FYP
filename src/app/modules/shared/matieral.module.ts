import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const imports = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatTooltipModule,
]

@NgModule({
  imports,
  exports: imports,
})
export class MaterialModule { }