import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableGroupsComponent } from './modules/groups/available-groups/available-groups.component';
import { GroupComponent } from './modules/groups/group/group.component';
import { GroupsComponent } from './modules/groups/groups.component';

const routes: Routes = [
  {
    path: 'g',
    component: GroupsComponent,
    children: [
      {
        path: '',
        component: AvailableGroupsComponent,
      },
      {
        path: ':id',
        component: GroupComponent,
      },
    ]
  },
  {
    path: '**', redirectTo: '/g', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
