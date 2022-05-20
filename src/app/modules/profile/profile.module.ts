import { NgModule } from '@angular/core';
import { ServerModule } from '../server/server.module';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileContainer } from './profile.container';



@NgModule({
  declarations: [
    ProfileContainer,
    ProfileComponent
  ],
  imports: [
    SharedModule,
    ServerModule,
  ]
})
export class ProfileModule { }
