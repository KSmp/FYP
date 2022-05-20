import { NgModule } from '@angular/core';import { ServerModule } from '../server/server.module';
import { SharedModule } from '../shared/shared.module';
import { FriendsGridComponent } from './friends-grid/friends-grid.component';
import { FriendsGridContainer } from './friends-grid/friends-grid.container';
import { FriendsComponent } from './friends/friends.component';



@NgModule({
  declarations: [
    FriendsComponent,
    FriendsGridContainer,
    FriendsGridComponent,
  ],
  imports: [
    SharedModule,
    ServerModule,
  ]
})
export class FriendsModule { }
