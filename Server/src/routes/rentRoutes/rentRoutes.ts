import { Router } from 'express';
import createRentHandler from './handlers/createRentHandler';
import putReviewStatusHandler from './handlers/putReviewStatusHandler';

const rentRoutes = Router();

rentRoutes.post('/', createRentHandler);
rentRoutes.put("/:id/review-status", putReviewStatusHandler)

export default rentRoutes;