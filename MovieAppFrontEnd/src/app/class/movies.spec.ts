import { Movies } from './movies'; // Import the Movies interface from the correct path

describe('Movies Interface', () => {
  it('should create an object that conforms to the Movies interface', () => {
    const movie: Movies = {
      title: 'Example Movie',
      description: 'A great movie',
      duration: '2 hours',
      language: 'English',
      type: 'Action',
      image: 'movie.jpg',
      rating: 4.5,
      trailer: 'trailer.mp4',
    };

    expect(movie).toBeTruthy();
    expect(movie.title).toBe('Example Movie');
    expect(movie.description).toBe('A great movie');
    expect(movie.duration).toBe('2 hours');
    expect(movie.language).toBe('English');
    expect(movie.type).toBe('Action');
    expect(movie.image).toBe('movie.jpg');
    expect(movie.rating).toBe(4.5);
    expect(movie.trailer).toBe('trailer.mp4');
  });
});
