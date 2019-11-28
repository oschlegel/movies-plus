import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {MovieService}from '@movies-plus/shared/data-access-movie';

@Component({
  selector: 'movies-plus-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit {
  value = this.movieService.searchText;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  onClick() {
    this.movieService.searchText = this.value;
  }
}
