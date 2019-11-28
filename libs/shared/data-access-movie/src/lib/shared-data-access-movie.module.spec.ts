import { async, TestBed } from '@angular/core/testing';
import { SharedDataAccessMovieModule } from './shared-data-access-movie.module';

describe('SharedDataAccessMovieModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedDataAccessMovieModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedDataAccessMovieModule).toBeDefined();
  });
});
