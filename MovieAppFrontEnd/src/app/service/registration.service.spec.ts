import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RegistrationService } from './registration.service';
import { User } from '../class/user';

describe('RegistrationService', () => {
  let registrationService: RegistrationService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegistrationService],
    });

    registrationService = TestBed.inject(RegistrationService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(registrationService).toBeTruthy();
  });

  it('should add a new user', () => {
    const newUser: User = { uname: 'newuser',uemail:'newuser@gmail.com', upass: 'password' };
    const mockResponse: User = newUser;

    registrationService.addUser(newUser).subscribe((user) => {
      expect(user).toEqual(mockResponse);
    });

    const req = httpTestingController.expectOne(
      'http://localhost:8080/api/users/registeruser'
    );
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);

    httpTestingController.verify();
  });

  it('should log in a user', () => {
    const userToLogin: User = { uname: 'loginuser', uemail:'sahoo@gmail.com',upass: 'password' };

    registrationService.loginUserFromJava(userToLogin).subscribe((user) => {
      expect(user).toEqual(userToLogin);
    });

    const req = httpTestingController.expectOne(
      'http://localhost:8080/api/users/loginuser'
    );
    expect(req.request.method).toBe('POST');
    req.flush(userToLogin);

    httpTestingController.verify();
  });
});
