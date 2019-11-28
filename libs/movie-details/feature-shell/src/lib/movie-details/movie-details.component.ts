import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MovieService } from '@movies-plus/shared/data-access-movie';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'movies-plus-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsComponent implements OnInit {
  movie$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.movie$ = this.route.params.pipe(
      switchMap(params => this.movieService.loadById(params['movieId']))
    );
  }

  getMovieProperties(movie) {
    return Object.keys(movie).filter(key => key !== 'Poster').map(key => {
      if(key === 'Ratings') {
        return [key, movie[key].map(it => `${it.Source}: ${it.Value}`).join(', ')];
      }
      return [key, movie[key]];
    });
  }
}
