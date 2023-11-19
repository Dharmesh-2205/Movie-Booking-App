import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ScreenService } from './screen.service';

describe('ScreenService', () => {
  let screenService: ScreenService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ScreenService],
    });

    screenService = TestBed.inject(ScreenService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(screenService).toBeTruthy();
  });

  it('should fetch screen details from the server', () => {
    const mockScreenDetails = [
      { screenName: 'Screen A', totalNoOfSeats: 100, seatType: 'VIP' },
    ];

    screenService.getScreenDetailsFromServer().subscribe((screenDetails) => {
      expect(screenDetails).toEqual(mockScreenDetails);
    });

    const req = httpTestingController.expectOne(
      'http://localhost:8080/api/screen'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockScreenDetails);

    httpTestingController.verify();
  });

  it('should fetch the screen details only once',()=>{
    spyOn(screenService,'getScreenDetailsFromServer');
    expect(screenService.getScreenDetailsFromServer).toHaveBeenCalledTimes(0);
  })
});
