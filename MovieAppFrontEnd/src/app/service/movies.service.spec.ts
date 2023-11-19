import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let moviesService: MoviesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesService],
    });

    moviesService = TestBed.inject(MoviesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(moviesService).toBeTruthy();
  });

  it('should retrieve movies from the server', () => {
    const mockMovies = [{ title: 'Movie 1', description: 'Description 1' }];

    moviesService.MoviesFromServer().subscribe((movies) => {
      expect(movies).toEqual(mockMovies);
    });

    const req = httpTestingController.expectOne(
      'http://localhost:8080/api/movie'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockMovies);

    httpTestingController.verify();
  });

  it('should retrieve movies by name from the server', () => {
    const movieName = 'KGF';
    const mockMovie = { title: 'KGF', description: 'Action movie' };

    moviesService.MoviesFromServerByName().subscribe((movie) => {
      expect(movie).toEqual(mockMovie);
    });

    const req = httpTestingController.expectOne(
      `http://localhost:8080/api/movie/searchmovie/${movieName}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockMovie);

    httpTestingController.verify();
  });

  it('should call the movie server only once', () => {
    spyOn(moviesService, 'MoviesFromServer');

    expect(moviesService.MoviesFromServer).toHaveBeenCalledTimes(0);
  });
});
