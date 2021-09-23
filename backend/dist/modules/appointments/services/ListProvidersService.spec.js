"use strict";

var _FakeUsersRepository = _interopRequireDefault(require("../../users/repositories/fakes/FakeUsersRepository"));

var _ListProvidersService = _interopRequireDefault(require("./ListProvidersService"));

var _FakeCacheProvider = _interopRequireDefault(require("../../../shared/container/providers/CacheProvider/fakes/FakeCacheProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let fakeUsersRepository;
let fakeCacheProvider;
let listProviders;
describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new _FakeUsersRepository.default();
    fakeCacheProvider = new _FakeCacheProvider.default();
    listProviders = new _ListProvidersService.default(fakeUsersRepository, fakeCacheProvider);
  });
  it('should be able to list the providers', async () => {
    const user1 = await fakeUsersRepository.create({
      name: 'Jon Doe',
      email: 'email@email.com',
      password: '123456'
    });
    const user2 = await fakeUsersRepository.create({
      name: 'Jon Trê',
      email: 'emailtre@email.com',
      password: '123456'
    });
    const loggedUser = await fakeUsersRepository.create({
      name: 'Jon Qua',
      email: 'emailqua@email.com',
      password: '123456'
    });
    const providers = await listProviders.execute({
      user_id: loggedUser.id
    });
    await expect(providers).toEqual([user1, user2]);
  });
});