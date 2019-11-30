import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MovieService } from '@movies-plus/shared/data-access-movie';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'movies-plus-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesListComponent implements OnInit {
  movies$: Observable<any>;

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit() {
    this.movies$ = this.movieService.search();
  }

  onMovieClick(movie) {
    this.router.navigate(['movies', movie.imdbID]);
  }
}
