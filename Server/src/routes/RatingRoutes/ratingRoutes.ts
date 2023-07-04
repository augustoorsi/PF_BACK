import { Router } from 'express';
import createRatingHandler from './handlers/createRatingHandler';
import updatedReviewStatusHandler from "./handlers/updatedReviewStatusHandler";
import getRatingHandler from './handlers/getRatingHandler';

const ratingRoutes = Router();

ratingRoutes.get("/", getRatingHandler)
ratingRoutes.post('/', createRatingHandler);
ratingRoutes.put("/:id", updatedReviewStatusHandler);

export default ratingRoutes;