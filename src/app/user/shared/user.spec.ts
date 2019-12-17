import {User} from './user';

describe('User', () => {
  it('should user-create-form an instance', () => {
    expect(new User()).toBeTruthy();
  });
});
