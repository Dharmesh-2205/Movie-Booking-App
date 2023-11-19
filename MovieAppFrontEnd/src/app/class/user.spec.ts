import { TestBed } from '@angular/core/testing';
import { User } from './user';

describe('User Interface', () => {
  it('should create an object that confirms to the User interface', () => {
    const mockUser: User = {
      uname: 'dharu1',
      uemail: 'example@hotmail.com',
      upass: 'Pass',
    };

    expect(mockUser).toBeTruthy();
    expect(mockUser.uname).toBe('dharu1');
    expect(mockUser.uemail).toBe('example@hotmail.com');
    expect(mockUser.upass).toBe('Pass');
  });
});
