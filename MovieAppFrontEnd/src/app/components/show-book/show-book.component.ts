import { Component, OnInit } from '@angular/core';
import { City } from '../../class/city';
import { CityService } from '../../service/city.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TheatreService } from '../../service/theatre.service';
import { Theatre } from '../../class/theatre';
import { ScreenService } from '../../service/screen.service';
import { MoviesService } from '../../service/movies.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css'],
})
export class ShowBookComponent implements OnInit {
  duplmovies: any;
  city?: City[];
  theatres: any;
  theatresByCity?: Theatre[];
  screen: any;
  Screendata: any;
  response = 'Hello';
  ngOnInit(): void {
    this.getCities();
    this.getTheatres();
    this.getmoviedupl();
  }
  constructor(
    private service: CityService,
    private theatreService: TheatreService,
    private screenService: ScreenService,
    private duplMovieService: MoviesService,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.getScreenDetails();
  }

  public getCities(): any {
    this.service.CitiesFromServer().subscribe((response) => {
      this.city = response;
    }),
      (error: HttpErrorResponse) => {
        console.log("Can't find any cities");
      };
  }

  public getTheatres(): any {
    this.theatreService.TheatresFromServer().subscribe((response1) => {
      this.theatres = response1;
      console.log(this.theatres);
    }),
      (error: HttpErrorResponse) => {};
  }
  public getTheatresByCity(theatreCity: any): any {
    console.log(theatreCity.value);
    this.theatreService
      .TheatresByCityFromServer(theatreCity.value)
      .subscribe((response) => {
        this.theatresByCity = response;
        // console.log(this.theatresByCity);
      });
  }
  public SearchTheatreBycity(key: string): void {
    const search: any = [];
    let count = 0;
    for (const city of this.theatres) {
      if (
        city.theatreCity.toLowerCase().indexOf(key.toLowerCase()) != -1 ||
        city.theatreName.toLowerCase().indexOf(key.toLowerCase()) != -1
      ) {
        search.push(city);
      }
    }
    this.theatres = search;
    if (key.length === 0 || !key) {
      this.getTheatres();
    }
  }

  public getScreenDetails(): any {
    this.screenService.getScreenDetailsFromServer().subscribe((response) => {
      this.screen = response;
      console.log(this.screen);
    }),
      (error: HttpErrorResponse) => {
        console.log('Cant find any screen details');
      };
  }

  public getmoviedupl(): any {
    this.duplMovieService.MoviesFromServer().subscribe((response) => {
      this.duplmovies = response;
      console.log(this.duplmovies);
    });
  }
  public Current_Data?: any;
  public saveDetails(saveForm: any) {
    this.Screendata = saveForm;
    localStorage.setItem('Current_Data', JSON.stringify(this.Screendata));
    const getCurrentData = localStorage.getItem('Current_Data');
    this.Current_Data = getCurrentData ? JSON.parse(getCurrentData) : null;
    console.log(this.Current_Data);

    this.router.navigate(['showdetails']);
  }
  ShowToastr() {
    this.toastr.success('Booking Confirmed');
  }
}
