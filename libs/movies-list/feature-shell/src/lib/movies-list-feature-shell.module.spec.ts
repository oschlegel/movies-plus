import { async, TestBed } from '@angular/core/testing';
import { MoviesListFeatureShellModule } from './movies-list-feature-shell.module';

describe('MoviesListFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MoviesListFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MoviesListFeatureShellModule).toBeDefined();
  });
});
