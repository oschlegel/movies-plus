import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { switchMap, filter, map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private searchText$: BehaviorSubject<string> = new BehaviorSubject(null);
  private movieQuery = gql`
    query getMovie($id: String!) {
      movie(imdbID: $id) {
        Plot
        Poster
        Title
        Ratings {
          Source
          Value
        }
      }
    }
  `;

  constructor(private httpClient: HttpClient, private apollo: Apollo) {}

  set searchText(text: string) {
    this.searchText$.next(text);
  }

  get searchText() {
    return this.searchText$.value;
  }

  search() {
    return this.searchText$.pipe(
      filter(searchText => !!searchText),
      switchMap(searchText =>
        this.httpClient.get('http://www.omdbapi.com', {
          params: { s: searchText, type: 'movie' }
        })
      )
    );
  }

  loadById(id: string) {
    return this.apollo
      .watchQuery({
        query: this.movieQuery,
        variables: {
          id
        }
      })
      .valueChanges.pipe(map(queryResult => queryResult.data['movie']));
  }
}
