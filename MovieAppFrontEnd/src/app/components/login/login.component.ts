import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { RegistrationService } from '../../service/registration.service';
import { User } from '../../class/user';
import { Router } from '@angular/router';
// import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private _service: RegistrationService,
    private _router: Router,
    private toastr: ToastrService
  ) {}
  // user1 = new User();
  msg = '';
  public addedUser!: User;
  ngOnInit() {}

  loginUser(loginForm: any) {
    this._service.loginUserFromJava(loginForm).subscribe(
      (data) => {
        // alert('Login Success');
        this._router.navigate(['/homepage']);
        this.toastr.success('LoggedIn Successfully');
        this._service.setLoginUser(data);
      },
      (error) =>
        // (this.msg = 'Bad credentials . Please check again before Login')
        this.toastr.error('Wrong Credentials')
    );
  }
}
