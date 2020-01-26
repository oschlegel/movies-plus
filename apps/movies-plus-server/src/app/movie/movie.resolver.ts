import { Resolver, Query, Args } from '@nestjs/graphql';
import { Movie } from './movie';
import { MovieService } from './movie.service';

@Resolver(of => Movie)
export class MovieResolver {
  constructor(private movieService: MovieService) {}

  @Query(returns => Movie, { name: 'movie' })
  async getMovie(@Args('imdbID') imdbID: string) {
    return this.movieService.loadById(imdbID);
  }
}
