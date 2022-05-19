import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AvailableGroupsComponent } from './available-groups/available-groups.component';
import { GroupComponent } from './group/group.component';
import { GroupsComponent } from './groups.component';
import { GroupCardComponent } from './group-card/group-card.component';
import { GroupNewComponent } from './group-new/group-new.component';
import { AvailableGroupsContainer } from './available-groups/available-groups.container';
import { ServerModule } from '../server/server.module';



@NgModule({
  imports: [
    SharedModule,
    ServerModule,
  ],
  declarations: [
    GroupsComponent,
    GroupComponent,
    AvailableGroupsContainer,
    AvailableGroupsComponent,
    GroupCardComponent,
    GroupNewComponent,
  ],
})
export class GroupsModule { }
