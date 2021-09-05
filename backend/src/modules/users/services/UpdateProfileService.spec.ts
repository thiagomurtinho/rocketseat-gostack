import AppError from '@shared/errors/AppError';

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

import UpdateProfileService from './UpdateProfileService';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashProvider: FakeHashProvider;
let updateProfile: UpdateProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    updateProfile = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashProvider,
    );
  });

  it('should be able to update the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Jon Doe',
      email: 'email@email.com',
      password: '123456',
    });

    const updateduser = await updateProfile.execute({
      user_id: user.id,
      name: 'Jhon Trê',
      email: 'jhontre@email.com',
    });

    await expect(updateduser.name).toBe('Jhon Trê');
    await expect(updateduser.email).toBe('jhontre@email.com');
  });

  it('should not be able the update the profile from non-existing user', async () => {
    await expect(
      updateProfile.execute({
        user_id: 'non-existing-user.id',
        name: 'Name-test',
        email: 'email-test@email.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able not be able to change to another user email', async () => {
    await fakeUsersRepository.create({
      name: 'Jon Doe',
      email: 'email@email.com',
      password: '123456',
    });

    const user = await fakeUsersRepository.create({
      name: 'Jon Fake',
      email: 'email_fake@email.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'Jhon Fake',
        email: 'email@email.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Jon Doe',
      email: 'email@email.com',
      password: '123456',
    });

    const updateduser = await updateProfile.execute({
      user_id: user.id,
      name: 'Jhon Trê',
      email: 'jhontre@email.com',
      old_password: '123456',
      password: '123123',
    });

    await expect(updateduser.password).toBe('123123');
  });

  it('should not be able to update the password without old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Jon Doe',
      email: 'email@email.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'Jhon Trê',
        email: 'jhontre@email.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to update the password without wrong password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Jon Doe',
      email: 'email@email.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'Jhon Trê',
        email: 'jhontre@email.com',
        old_password: 'whrong_old_password',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
