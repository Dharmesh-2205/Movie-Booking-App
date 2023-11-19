import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RegistrationService } from '../../service/registration.service';
import { User } from '../../class/user';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  constructor(
    private router: Router,
    private service: RegistrationService,
    private toastr: ToastrService
  ) {}

  public addedUser!: User;

  ngOnInit() {}
  gotoRegister(register: any) {
    if (register.uemail === '') {
      this.toastr.error('Email is empty');
    } else if (register.upass === '') {
      this.toastr.error('Password is empty');
    } else {
      this.service.addUser(register).subscribe(
        (response) => {
          this.addedUser = response;
          this.router.navigate(['login']);
          this.toastr.info('User is Registered ');
        },
        (error: HttpErrorResponse) => {
          this.toastr.error('Bad Request');
        }
      );
    }
  }
}
