import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CityService } from './city.service';

describe('CityService', () => {
  let cityService: CityService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CityService],
    });

    cityService = TestBed.inject(CityService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(cityService).toBeTruthy();
  });

  it('should fetch the cities from the server', () => {
    const mockCities = [{ id: 1, name: 'City 1' }];

    cityService.CitiesFromServer().subscribe((cities) => {
      expect(cities).toEqual(mockCities);
    });

    const req = httpTestingController.expectOne(
      'http://localhost:8080/api/city'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockCities);

    httpTestingController.verify();
  });

  it('should call the city server only once',()=>{
    spyOn(cityService,'CitiesFromServer');

    expect(cityService.CitiesFromServer).toHaveBeenCalledTimes(0);
  });
});
