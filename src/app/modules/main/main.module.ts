import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainComponent } from './main.component';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  imports: [
    SharedModule,
    RouterModule,
  ],
  declarations: [
    MainComponent,
    ToolbarComponent,
    MainMenuComponent,
  ],
  exports: [MainComponent],
})
export class MainModule { }
