import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { FriendsGridContainer } from './modules/friends/friends-grid/friends-grid.container';
import { FriendsComponent } from './modules/friends/friends/friends.component';
import { AvailableGroupsContainer } from './modules/groups/available-groups/available-groups.container';
import { GroupNewComponent } from './modules/groups/group-new/group-new.component';
import { GroupComponent } from './modules/groups/group/group.component';
import { GroupsComponent } from './modules/groups/groups.component';
import { ProfileContainer } from './modules/profile/profile.container';
import { NewPostComponent } from './modules/server/new-post/new-post.component';
import { PostViewContainer } from './modules/server/post-view/post-view.container';
import { ServerPostsContainer } from './modules/server/server-posts/server-posts.container';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
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
        component: ProfileContainer,
        children: [
          {
            path: '',
            component: ServerPostsContainer,
          },
          {
            path: 'new-post',
            component: NewPostComponent,
          },
        ]
      },
      {
        path: 'f',
        component: FriendsComponent,
        children: [
          {
            path: '',
            component: FriendsGridContainer,
          },
          {
            path: ':id',
            component: ProfileContainer,
          },
        ]
      },
      {
        path: 'group', redirectTo: '/g', pathMatch: 'full'
      },
      {
        path: 'profile', redirectTo: '/p', pathMatch: 'full'
      },
      {
        path: 'friends', redirectTo: '/f', pathMatch: 'full'
      },
      {
        path: '**', redirectTo: '/p', pathMatch: 'full'
      }
    ]
  },
  {
    path: '**', redirectTo: '/login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
