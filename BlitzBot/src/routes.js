import { Router } from 'express';
import { TakeGithubController } from './controllers';

const routes = new Router();

routes.get('/takegithub', TakeGithubController.show);

export default routes;
