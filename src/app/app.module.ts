import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MainModule } from './modules/main/main.module';
import { GroupsModule } from './modules/groups/groups.module';
import { ServerModule } from './modules/server/server.module';
import { ProfileModule } from './modules/profile/profile.module';
import { AuthModule } from './modules/auth/auth.module';
import { FriendsModule } from './modules/friends/friends.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MainModule,
    GroupsModule,
    ServerModule,
    ProfileModule,
    AuthModule,
    FriendsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
