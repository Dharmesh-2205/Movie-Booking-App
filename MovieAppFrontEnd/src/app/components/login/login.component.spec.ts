import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FormsModule } from "@angular/forms";
import { LoginComponent } from "./login.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { ToastrModule, ToastrService } from "ngx-toastr";
import { User } from "src/app/class/user";
import { RegistrationService } from "src/app/service/registration.service";
import { of, throwError } from "rxjs";


describe('Login Component',()=>{
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let toastrSpy: ToastrService;
    let loginServiceSpy: RegistrationService;
    let routerSpy: Router;
    let mockuser:User;

    beforeEach(()=>{
        mockuser = {
          uemail: 'dharu@gmail.com',
          upass: 'testpass',
          uname: 'dharu',
        };
        TestBed.configureTestingModule({
        declarations: [LoginComponent],
        imports: [
            HttpClientTestingModule,
            RouterTestingModule,
            FormsModule,
            ToastrModule.forRoot(),
            ],
        });
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        toastrSpy = TestBed.inject(ToastrService);
        loginServiceSpy = TestBed.inject(RegistrationService);
        routerSpy = TestBed.inject(Router);
    });
    it('should create login component',()=>{
        expect(component).toBeTruthy();
    });

    it('should login successfully when user enters valid details',()=>{
        spyOn(loginServiceSpy, 'loginUserFromJava').and.returnValue(of(mockuser));
        spyOn(routerSpy, 'navigate');
        spyOn(toastrSpy,'success');
        spyOn(loginServiceSpy, 'setLoginUser');

        component.loginUser(mockuser);

        expect(loginServiceSpy.loginUserFromJava).toHaveBeenCalledWith(mockuser);
        expect(routerSpy.navigate).toHaveBeenCalledWith(['/homepage']);
        expect(toastrSpy.success).toHaveBeenCalledWith('LoggedIn Successfully');
        expect(loginServiceSpy.setLoginUser).toHaveBeenCalledWith(mockuser);
    });
    it('should display error when user enters wrong credentials',()=>{
        spyOn(toastrSpy,'error');
        spyOn(loginServiceSpy,'loginUserFromJava').and.returnValue(throwError('error'));
        component.loginUser(mockuser);

        expect(loginServiceSpy.loginUserFromJava).toHaveBeenCalledWith(mockuser);
        expect(toastrSpy.error).toHaveBeenCalledWith('Wrong Credentials');

    });
});
