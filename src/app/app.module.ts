import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { ToolbarComponent } from './toolbar/toolbar.component';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { GroupsSideComponent } from './groups-side/groups-side.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupsContentComponent } from './groups-content/groups-content.component';
import { GroupSideListComponent } from './group-side-list/group-side-list.component';

const material = [
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ToolbarComponent,
    MainMenuComponent,
    GroupsSideComponent,
    GroupsComponent,
    GroupsContentComponent,
    GroupSideListComponent
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
