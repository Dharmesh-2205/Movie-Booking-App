import { TestBed } from '@angular/core/testing';
import { Screen } from './screen'; // Import the Screen interface from the correct path

describe('Screen Interface', () => {
  it('should create an object that conforms to the Screen interface', () => {
    const screen: Screen = {
      screenName: 'Screen A',
      totalNoOfSeats: 100,
      seatType: 'VIP',
    };

    expect(screen).toBeTruthy();
    expect(screen.screenName).toBe('Screen A');
    expect(screen.totalNoOfSeats).toBe(100);
    expect(screen.seatType).toBe('VIP');
  });
});
