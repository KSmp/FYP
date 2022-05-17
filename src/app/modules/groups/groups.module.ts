import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AvailableGroupsComponent } from './available-groups/available-groups.component';
import { GroupComponent } from './group/group.component';
import { GroupsContentComponent } from './groups-content/groups-content.component';
import { GroupsSideComponent } from './groups-side/groups-side.component';
import { GroupsComponent } from './groups.component';



@NgModule({
  imports: [
    SharedModule,
    RouterModule,
  ],
  declarations: [
    GroupsComponent,
    GroupsSideComponent,
    GroupsContentComponent,
    GroupComponent,
    AvailableGroupsComponent,
  ],
})
export class GroupsModule { }
