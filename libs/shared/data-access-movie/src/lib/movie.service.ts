import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private searchText$: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor(private httpClient: HttpClient) {}

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
    return this.httpClient.get('http://www.omdbapi.com', {
      params: { i: id, plot: 'full' }
    });
  }
}
