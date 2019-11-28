import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MoviesListFeatureSearchBarModule } from '@movies-plus/movies-list/feature-search-bar';

@NgModule({
  imports: [
    CommonModule,
    MoviesListFeatureSearchBarModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: MoviesListComponent }
    ])
  ],
  declarations: [MoviesListComponent]
})
export class MoviesListFeatureShellModule {}
