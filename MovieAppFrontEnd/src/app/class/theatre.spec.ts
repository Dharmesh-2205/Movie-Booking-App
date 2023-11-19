import { TestBed } from '@angular/core/testing';
import { Theatre } from './theatre'; // Import the Theatre interface from the correct path

describe('Theatre Interface', () => {
  it('should create an object that confirms to the Theatre interface', () => {
    const theatre: Theatre = {
      theatreName: 'Example Theatre',
      theatreImage: 'theatre.jpg',
      theatreCity: 'Example City',
    };

    expect(theatre).toBeTruthy();
    expect(theatre.theatreName).toBe('Example Theatre');
    expect(theatre.theatreImage).toBe('theatre.jpg');
    expect(theatre.theatreCity).toBe('Example City');
  });
});
