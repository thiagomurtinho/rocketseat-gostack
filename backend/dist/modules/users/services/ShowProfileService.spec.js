"use strict";

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _FakeUsersRepository = _interopRequireDefault(require("../repositories/fakes/FakeUsersRepository"));

var _ShowProfileService = _interopRequireDefault(require("./ShowProfileService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let fakeUsersRepository;
let showProfile;
describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new _FakeUsersRepository.default();
    showProfile = new _ShowProfileService.default(fakeUsersRepository);
  });
  it('should be able the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Jon Doe',
      email: 'email@email.com',
      password: '123456'
    });
    const profile = await showProfile.execute({
      user_id: user.id
    });
    await expect(profile.name).toBe('Jon Doe');
    await expect(profile.email).toBe('email@email.com');
  });
  it('should not be able the profile from non-existing user', async () => {
    await expect(showProfile.execute({
      user_id: 'non-existing-user.id'
    })).rejects.toBeInstanceOf(_AppError.default);
  });
});