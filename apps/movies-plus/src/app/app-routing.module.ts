import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full',
    data: {
      showFooterNavigation: true
    }
  },
  {
    path:'movies',
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('../../../../libs/movies-list/feature-shell/src/lib/movies-list-feature-shell.module').then(m => m.MoviesListFeatureShellModule)
      },
      {
        path: ':movieId',
        loadChildren: () => import('../../../../libs/movie-details/feature-shell/src/lib/movie-details-feature-shell.module').then(m => m.MovieDetailsFeatureShellModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
