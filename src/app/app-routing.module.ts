import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableGroupsContainer } from './modules/groups/available-groups/available-groups.container';
import { GroupNewComponent } from './modules/groups/group-new/group-new.component';
import { GroupComponent } from './modules/groups/group/group.component';
import { GroupsComponent } from './modules/groups/groups.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { NewPostComponent } from './modules/server/new-post/new-post.component';
import { PostViewContainer } from './modules/server/post-view/post-view.container';
import { ServerPostsContainer } from './modules/server/server-posts/server-posts.container';

const routes: Routes = [
  {
    path: 'g',
    component: GroupsComponent,
    children: [
      {
        path: '',
        component: AvailableGroupsContainer,
      },
      {
        path: 'new',
        component: GroupNewComponent,
      },
      {
        path: ':id',
        component: GroupComponent,
        children: [
          {
            path: '',
            component: ServerPostsContainer,
          },
          {
            path: 'new-post',
            component: NewPostComponent,
          },
          {
            path: ':postid',
            component: PostViewContainer,
          }
        ]
      },
    ]
  },
  {
    path: 'p',
    component: ProfileComponent,
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
