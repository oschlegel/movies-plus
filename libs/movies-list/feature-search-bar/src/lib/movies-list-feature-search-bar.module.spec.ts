import { async, TestBed } from '@angular/core/testing';
import { MoviesListFeatureSearchBarModule } from './movies-list-feature-search-bar.module';

describe('MoviesListFeatureSearchBarModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MoviesListFeatureSearchBarModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MoviesListFeatureSearchBarModule).toBeDefined();
  });
});
