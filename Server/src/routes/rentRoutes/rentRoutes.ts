import { Router } from 'express';
import createRentHandler from './handlers/createRentHandler';

const rentRoutes = Router();

rentRoutes.post('/', createRentHandler);

export default rentRoutes;