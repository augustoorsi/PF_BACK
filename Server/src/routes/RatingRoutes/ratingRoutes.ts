import { Router } from 'express';
import createRatingHandler from './handlers/createRatingHandler';

const ratingRoutes = Router();

ratingRoutes.post('/', createRatingHandler);

export default ratingRoutes;