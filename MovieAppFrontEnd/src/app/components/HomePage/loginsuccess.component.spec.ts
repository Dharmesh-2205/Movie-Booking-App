import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginsuccessComponent } from './loginsuccess.component';
import { MoviesService } from 'src/app/service/movies.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { User } from 'src/app/class/user';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Movies } from 'src/app/class/movies';

describe('HomePage Component', () => {
  let component: LoginsuccessComponent;
  let fixture: ComponentFixture<LoginsuccessComponent>;
  let mockMoviesService: MoviesService;
  let mockToastrService: ToastrService;
  let mockMovies:Movies;

  const mockUser: User = {
    uname:'name1',
    uemail:'email1',
    upass:'pass1'
  };

  beforeEach(() => {
    mockMovies = {
      title: 'title1',
      description: 'desc1',
      duration: 'duration1',
      language: 'lang1',
      type: 'type1',
      image: 'image1',
      rating: 4.5,
      trailer: 'string',
    };
    TestBed.configureTestingModule({
      declarations: [LoginsuccessComponent],
      providers: [
        MoviesService,ToastrService
      ],
      imports:[FormsModule,ToastrModule.forRoot(),HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(LoginsuccessComponent);
    component = fixture.componentInstance;
    mockMoviesService = TestBed.inject(MoviesService);
    mockToastrService = TestBed.inject(ToastrService);
  });

  it('should create the Home Component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch the movies', () => {
    spyOn(mockMoviesService, 'MoviesFromServer').and.returnValue(of(mockMovies));

    component.getMovies();

    expect(mockMoviesService.MoviesFromServer).toHaveBeenCalledWith();
    expect(component.movies).toEqual(mockMovies);
  });

  it('should search for movies', () => {
    const mockMovies = [
      { title: 'Movie 1', type: 'Action' },
      { title: 'Movie 2', type: 'Comedy' },
    ];
    component.movies = mockMovies;

    component.SearchMovie('Action'||'Comedy');

    const filteredMovies = [{ title: 'Movie 1', type: 'Action' }];
    expect(component.movies).toEqual(filteredMovies);
  });

  it('should reset movies on empty search key', () => {
    const mockMovies = [
      { title: 'Movie 1', type: 'Action' },
      { title: 'Movie 2', type: 'Comedy' },
    ];
    component.movies = mockMovies;

    component.SearchMovie('');

    expect(component.movies).toEqual(mockMovies);
  });

  it('should remove user and booking details from local storage and show a success toastr message on logout', () => {
    spyOn(localStorage, 'removeItem');
    spyOn(mockToastrService, 'success');
    component.currentUser = mockUser;

    component.logout();

    expect(localStorage.removeItem).toHaveBeenCalledWith('currentUser');
    expect(localStorage.removeItem).toHaveBeenCalledWith('CurrentDetails');
    expect(mockToastrService.success).toHaveBeenCalledWith('User Logged Out');
  });
});
