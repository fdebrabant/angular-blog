import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostListComponent } from './post-list/post-list.component';
import { AuthGuard } from './services/auth-guard.service';
import { SinglePostComponent } from './single-post/single-post.component';

const routes: Routes = [
  {
    path: 'posts',
    canActivate: [AuthGuard],
    component: PostListComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'posts/:id',
    canActivate: [AuthGuard],
    component: SinglePostComponent,
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

// path ** a mettre obligatoirement a la fin si nn il va matcher avant les autres

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}