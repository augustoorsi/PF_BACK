import { Router } from 'express';
import createRatingHandler from './handlers/createRatingHandler';
import updatedReviewStatusHandler from "./handlers/updatedReviewStatusHandler";

const ratingRoutes = Router();

ratingRoutes.post('/', createRatingHandler);
ratingRoutes.put("/:id", updatedReviewStatusHandler);

export default ratingRoutes;