import { async, TestBed } from '@angular/core/testing';
import { MovieDetailsFeatureShellModule } from './movie-details-feature-shell.module';

describe('MovieDetailsFeatureShellModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MovieDetailsFeatureShellModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MovieDetailsFeatureShellModule).toBeDefined();
  });
});
