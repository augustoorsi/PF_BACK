import { Router } from 'express';
import createRatingHandler from './handlers/createRatingHandler';
import updatedReviewStatusHandler from "./handlers/updatedReviewStatusHandler";
import getRatingByIdHandler from './handlers/getRatingHandler';

const ratingRoutes = Router();

ratingRoutes.get("/:id", getRatingByIdHandler)
ratingRoutes.post('/', createRatingHandler);
ratingRoutes.put("/:id", updatedReviewStatusHandler);

export default ratingRoutes;