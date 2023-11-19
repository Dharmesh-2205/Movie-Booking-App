import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrationComponent } from './registration.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { RegistrationService } from 'src/app/service/registration.service';
import { Router } from '@angular/router';
import { of ,throwError} from 'rxjs';
import { User } from 'src/app/class/user';

describe('Registration Component', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let toastrSpy:ToastrService
  let registrationServiceSpy: RegistrationService;
  let routerSpy:Router;
  let mockUser:User;
  
  beforeEach(() => {
    mockUser = {
      uemail: 'dharu@gmail.com',
      upass: 'testpass',
      uname: 'dharu',
    };
    TestBed.configureTestingModule({
      declarations: [RegistrationComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule,
        ToastrModule.forRoot(),
      ],
    });
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    toastrSpy = TestBed.inject(ToastrService)
    registrationServiceSpy = TestBed.inject(RegistrationService);
    routerSpy = TestBed.inject(Router);
  

    fixture.detectChanges();
  });

  it('should create registration component', () => {
    expect(component).toBeTruthy();
  });

  it('should register succcessfully with valid user details',()=>{

    spyOn(registrationServiceSpy, 'addUser').and.returnValue(of(mockUser));
    spyOn(routerSpy,'navigate');
    spyOn(toastrSpy,'info');

    component.gotoRegister(mockUser);

    expect(registrationServiceSpy.addUser).toHaveBeenCalledWith(mockUser);
    expect(component.addedUser).toEqual(mockUser);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['login']);
    expect(toastrSpy.info).toHaveBeenCalledWith('User is Registered ');
  });
  it('should handle error if registration failed',()=>{
    spyOn(toastrSpy,'error');
    spyOn(registrationServiceSpy, 'addUser').and.returnValue(
      throwError('error')
    );
    component.gotoRegister(mockUser);
    expect(registrationServiceSpy.addUser).toHaveBeenCalledWith(mockUser);
    expect(toastrSpy.error).toHaveBeenCalledWith('Bad Request');
  });
  it('should not register with empty user-email',()=>{
    const mockUser1={
      uemail:"",
      upass:"pass1",
      uname:"dharu1"
    }
    spyOn(toastrSpy,'error');
    component.gotoRegister(mockUser1);
    expect(toastrSpy.error).toHaveBeenCalledWith('Email is empty');

  });
    it('should not register with empty user-password', () => {
      const mockUser2 = {
        uemail: 'dharu@hotmail.com',
        upass: '',
        uname: 'dharu1',
      };
      spyOn(toastrSpy, 'error');
      component.gotoRegister(mockUser2);
      expect(toastrSpy.error).toHaveBeenCalledWith('Password is empty');
    });
  
});
