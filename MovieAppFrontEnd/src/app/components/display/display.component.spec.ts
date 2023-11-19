import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisplayComponent } from './display.component';
import { details } from 'src/app/class/details';

describe('DisplayComponent', () => {
  let component: DisplayComponent;
  let fixture: ComponentFixture<DisplayComponent>;

  beforeEach(() => {
    
    TestBed.configureTestingModule({
      declarations: [DisplayComponent],
    });

      fixture = TestBed.createComponent(DisplayComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
  });

  it('should create the Display component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize currentDetails from localStorage', () => {
    const testData = {
      screentype: 'screen1',
      Noofseats: 5,
      SeatType: 'seat1',
      movie: 'movie1',
    }; 
    localStorage.setItem('Current_Data', JSON.stringify(testData));

    component.ngOnInit();

    expect(component.currentDetails).toEqual(testData);
  });

  it('should initialize CurrentUser from localStorage', () => {
    const userData = { 
      uname:'dharu1',
      uemail:'test@gmail.com',
      upass:'pass1' 
    };
    localStorage.setItem('currentUser', JSON.stringify(userData));
    component.ngOnInit();

    expect(component.CurrentUser).toEqual(userData);
  });

  // it('should not initialize currentDetails if data is not in localStorage', () => {
  //   localStorage.removeItem('Current_Data');

  //   component.ngOnInit();

  //   expect(component.currentDetails).toBeUndefined();
  // });

  // it('should not initialize Username if data is not in localStorage', () => {
  //   localStorage.removeItem('currentUser');

  //   component.ngOnInit();

  //   expect(component.CurrentUser).toBeUndefined();
  // });

});
