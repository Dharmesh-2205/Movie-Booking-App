import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TheatreService } from './theatre.service';

describe('TheatreService', () => {
  let theatreService: TheatreService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TheatreService],
    });

    theatreService = TestBed.inject(TheatreService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(theatreService).toBeTruthy();
  });

  it('should fetch theatres from the server', () => {
    const mockTheatres = [{ theatreName: 'Theatre 1', theatreCity: 'City 1' }];

    theatreService.TheatresFromServer().subscribe((theatres) => {
      expect(theatres).toEqual(mockTheatres);
    });

    const req = httpTestingController.expectOne(
      'http://localhost:8080/api/theatre'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockTheatres);

    httpTestingController.verify();
  });

  it('should fetch theatres by city from the server', () => {
    const theatreCity = 'CityName';
    const mockTheatres = [
      { theatreName: 'Theatre 1', theatreCity: 'CityName' },
    ];

    theatreService
      .TheatresByCityFromServer(theatreCity)
      .subscribe((theatres) => {
        expect(theatres).toEqual(mockTheatres);
      });

    const req = httpTestingController.expectOne(
      `http://localhost:8080/api/theatre/${theatreCity}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockTheatres);

    httpTestingController.verify();
  });

  it('should fetch the theatres from the server only once',()=>{
    spyOn(theatreService,'TheatresFromServer');
    expect(theatreService.TheatresFromServer).toHaveBeenCalledTimes(0);
  })
});
