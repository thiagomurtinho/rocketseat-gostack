import { Router } from 'express';
import multer from 'multer';

import uploadConfig from '@config/upload';

import UsersAvatarController from '../controller/UsersAvatarController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UsersController from '../controller/UsersController';

const usersRouter = Router();
const upload = multer(uploadConfig);

const usersController = new UsersController();
const usersAvatarcontroller = new UsersAvatarController();

usersRouter.post('/', usersController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  usersAvatarcontroller.update,
);
export default usersRouter;
