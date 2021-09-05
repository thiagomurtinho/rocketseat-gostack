import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ShowProfileService from './ShowProfileService';

let fakeUsersRepository: FakeUsersRepository;
let showProfile: ShowProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    showProfile = new ShowProfileService(fakeUsersRepository);
  });

  it('should be able the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Jon Doe',
      email: 'email@email.com',
      password: '123456',
    });

    const profile = await showProfile.execute({
      user_id: user.id,
    });

    await expect(profile.name).toBe('Jon Doe');
    await expect(profile.email).toBe('email@email.com');
  });

  it('should not be able the profile from non-existing user', async () => {
    await expect(
      showProfile.execute({
        user_id: 'non-existing-user.id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
