import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ServerComponent } from './server/server.component';
import { ServerSideComponent } from './server-side/server-side.component';
import { PostComponent } from './post/post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { ServerPostsComponent } from './server-posts/server-posts.component';
import { CommentsComponent } from './comments/comments.component';
import { PostViewComponent } from './post-view/post-view.component';
import { ServerPostsContainer } from './server-posts/server-posts.container';
import { PostViewContainer } from './post-view/post-view.container';
import { WidgetsComponent } from './widgets/widgets.component';


@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    ServerComponent,
    ServerSideComponent,
    PostComponent,
    NewPostComponent,
    ServerPostsContainer,
    ServerPostsComponent,
    CommentsComponent,
    PostViewContainer,
    PostViewComponent,
    WidgetsComponent,
  ],
  exports: [
    ServerComponent
  ],
})
export class ServerModule { }
