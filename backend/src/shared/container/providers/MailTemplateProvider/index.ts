import { container } from 'tsyringe';

import EtherealMailProvider from '../MailProvider/implementations/EtherealMailProvider';
import SESMailProvider from '../MailProvider/implementations/SESMailProvider';

import IMailTemplateProvider from './models/IMailTemplateProvider';
import HandlebarsMailTemplateProvider from './implementations/HandlebarsMailTemplateProvider';

const providers = {
  hanflebars: new HandlebarsMailTemplateProvider(),
};

container.registerInstance<IMailTemplateProvider>(
  'MailTemplateProvider',
  providers.hanflebars,
);
