import { Router } from 'express';

import DefaultRouter from './domain/default.route';

const Routes = Router();

Routes.use('/', DefaultRouter);

export default Routes;
