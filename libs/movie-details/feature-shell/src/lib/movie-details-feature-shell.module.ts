import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: MovieDetailsComponent}
    ])
  ],
  declarations: [MovieDetailsComponent]
})
export class MovieDetailsFeatureShellModule {}
