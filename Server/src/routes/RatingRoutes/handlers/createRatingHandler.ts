import { Request, Response } from 'express';
import createRatingController from '../controllers/createRatingController';
import putReviewStatusController from '../../rentRoutes/controllers/putReviewStatusController';

const createRatingHandler = async (req: Request, res: Response) => {
    try {
        const ratingData = req.body;
        const newRating = await createRatingController(ratingData);

        const rating_id = newRating.rating_id;

        await putReviewStatusController(rating_id)
        res.status(200).json(newRating);
    } catch (error) {
        res.status(400).json({ error: 'Internal server error' });
    }
}

export default createRatingHandler;