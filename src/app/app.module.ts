import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContentComponent } from './content/content.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MainMenuComponent } from './main-menu/main-menu.component';

const material = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SideBarComponent,
    ContentComponent,
    ToolbarComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...material,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
