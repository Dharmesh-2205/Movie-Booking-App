import {
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ShowBookComponent } from './show-book.component';
import { CityService } from '../../service/city.service';
import { TheatreService } from '../../service/theatre.service';
import { ScreenService } from '../../service/screen.service';
import { MoviesService } from '../../service/movies.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { City } from '../../class/city';

describe('ShowBookComponent', () => {
  let component: ShowBookComponent;
  let fixture: ComponentFixture<ShowBookComponent>;
  let mockCityService: CityService;
  let mockTheatreService: TheatreService;
  let mockScreenService: ScreenService;
  let mockMoviesService: MoviesService;
  let mockToastrService: ToastrService;
  let mockRouter: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowBookComponent],
      providers: [
        CityService,
        TheatreService,
        ScreenService,
        MoviesService,
        ToastrService,
        Router,
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        FormsModule,
        ToastrModule.forRoot(),
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ShowBookComponent);
    component = fixture.componentInstance;
    mockCityService = TestBed.inject(CityService);
    mockTheatreService = TestBed.inject(TheatreService);
    mockScreenService = TestBed.inject(ScreenService);
    mockMoviesService = TestBed.inject(MoviesService);
    mockToastrService = TestBed.inject(ToastrService);
    mockRouter = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the ShowBook component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch cities from the Cityservice', () => {
    const mockCities = [
      {
        zipcode: 56987,
        cityname: 'city1',
        state: 'state1',
      },
      {
        zipcode: 56587,
        cityname: 'city2',
        state: 'state2',
      },
    ];
    spyOn(mockCityService, 'CitiesFromServer').and.returnValue(of(mockCities));

    component.getCities();

    expect(mockCityService.CitiesFromServer).toHaveBeenCalledWith();
    expect(component.city).toEqual(mockCities);
  });

  it('should fetch theatres from the Theatre service', () => {
    const theatres = [{ id: 1, name: 'Theatre 1' }];
    spyOn(mockTheatreService, 'TheatresFromServer').and.returnValue(
      of(theatres)
    );

    component.getTheatres();

    expect(mockTheatreService.TheatresFromServer).toHaveBeenCalled();
    expect(component.theatres).toEqual(theatres);
  });
  it('should search for theatres', () => {
    const mockTheatres = [
      {
        theatreName: 'thname1',
        theatreImage: 'thimage1',
        theatreCity: 'thcity1',
      },
    ];
    component.theatres = mockTheatres;

    component.SearchTheatreBycity('thcity1');

    const filteredTheatres = [
      {
        theatreName: 'thname1',
        theatreImage: 'thimage1',
        theatreCity: 'thcity1',
      },
    ];
    expect(component.theatres).toEqual(filteredTheatres);
  });

  it('should fetch screen details from the Screen service', () => {
    const mockScreen = [
      { screenName: 'screen1', totalNoOfSeats: 5, seatType: 'seat1' },
    ];
    spyOn(mockScreenService, 'getScreenDetailsFromServer').and.returnValue(
      of(mockScreen)
    );

    component.getScreenDetails();

    expect(mockScreenService.getScreenDetailsFromServer).toHaveBeenCalled();
    expect(component.screen).toEqual(mockScreen);
  });

  it('should fetch  movie names from the movie service', () => {
    const mockMovies = [
      {
        title: 'title2',
        description: 'desc2',
        duration: 'duration2',
        language: 'lang2',
        type: 'type2',
        image: 'image2',
        rating: 6.5,
        trailer: 'trailer2',
      },
    ];
    spyOn(mockMoviesService, 'MoviesFromServer').and.returnValue(
      of(mockMovies)
    );

    component.getmoviedupl();

    expect(mockMoviesService.MoviesFromServer).toHaveBeenCalled();
    expect(component.duplmovies).toEqual(mockMovies);
  });

  it('should save the form details and navigate to showdetails', () => {
    const formValue = {
      screenName: 'screen1',
      totalNoOfSeats: 5,
      seatType: 'seat1',
      movie: 'movie1',
    };
    spyOn(mockRouter, 'navigate');

    component.saveDetails(formValue);
    expect(localStorage.getItem('Current_Data')).toEqual(
      JSON.stringify(formValue)
    );
    expect(component.Current_Data).toEqual(formValue);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['showdetails']);
  });

  it('should show a success toastr message of booking confirmation', () => {
    spyOn(mockToastrService, 'success');
    component.ShowToastr();
    expect(mockToastrService.success).toHaveBeenCalledWith('Booking Confirmed');
  });
});
