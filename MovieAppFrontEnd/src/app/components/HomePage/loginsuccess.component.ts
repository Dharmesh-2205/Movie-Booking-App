import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { User } from 'src/app/class/user';
import { MoviesService } from 'src/app/service/movies.service';
import { RegistrationService } from 'src/app/service/registration.service';
import { ToastrService } from "ngx-toastr";



@Component({
  selector: 'app-loginsuccess',
  templateUrl: './loginsuccess.component.html',
  styleUrls: ['./loginsuccess.component.css'],
})
export class LoginsuccessComponent implements OnInit {
  constructor(
    private service: RegistrationService,
    private getMoviesService: MoviesService,
    private toastr:ToastrService
  ) {}
  movies: any;
  filterMovie: string = '';
  public currentUser?: User | null;
  public usercheck1!:boolean;
  ngOnInit(): void {
    this.getMovies();
    this.service.getLoginUser().subscribe((user) => {
      this.currentUser = user;
      if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      const getUser = localStorage.getItem('currentUser');

      this.currentUser = getUser ? JSON.parse(getUser) : null;
    });
  }
  public getMovies(): any {
    this.getMoviesService.MoviesFromServer().subscribe((response) => {
      this.movies = response;
    }),
      (error: HttpErrorResponse) => {
        console.log(error.message + "Can't get the movies...");
      };
  }

  public SearchMovie(key: string): void {
    const results: any = [];
    let count = 0;
    for (const movie of this.movies) {
      if (
        movie.title.toLowerCase().indexOf(key.toLowerCase()) != -1 ||
        movie.type.toLowerCase().indexOf(key.toLowerCase()) != -1
      ) {
        results.push(movie);
      }

    }
    this.movies = results;
    if (key.length === 0 || !key) {
      this.getMovies();
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('CurrentDetails');
    if (this.currentUser){
      this.toastr.success('User Logged Out');
    }
  }
}
