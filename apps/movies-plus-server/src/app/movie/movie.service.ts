import { Injectable, HttpService } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Movie } from './movie';

@Injectable()
export class MovieService {
  constructor(private httpService: HttpService) {}

  loadById(id: string) {
    return this.httpService
      .get<Movie>('http://www.omdbapi.com', {
        params: { i: id, plot: 'full', apikey: '726ff8bd' }
      })
      .pipe(map(response => response.data));
  }
}
