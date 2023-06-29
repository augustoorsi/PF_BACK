import { Request, Response } from 'express';
import createRatingController from '../controllers/createRatingController';

const createRatingHandler = async (req: Request, res: Response) => {
    try {
        const ratingData = req.body;
        const newRating = await createRatingController(ratingData);
        res.status(200).json(newRating);
    } catch (error) {
        res.status(400).json({ error: 'Internal server error' });
    }
}

export default createRatingHandler;