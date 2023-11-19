import { City } from "./city";

describe('City Interface', () => {
  it('should create an object that conforms to the City interface', () => {
    const city: City = {
      zipcode: 12345,
      cityname: 'Example City',
      state: 'Example State',
    };

    expect(city).toBeTruthy();
    expect(city.zipcode).toBe(12345);
    expect(city.cityname).toBe('Example City');
    expect(city.state).toBe('Example State');
  });
});
