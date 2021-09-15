import { Router } from 'express';
import multer from 'multer';
import { celebrate, Joi, Segments } from 'celebrate';

import uploadConfig from '@config/upload';

import UsersAvatarController from '../controller/UsersAvatarController';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import UsersController from '../controller/UsersController';

const usersRouter = Router();
const upload = multer(uploadConfig.multer);

const usersController = new UsersController();
const usersAvatarcontroller = new UsersAvatarController();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  usersAvatarcontroller.update,
);
export default usersRouter;
