import { Request, Response } from "express"
import putReviewStatusController from "../controllers/putReviewStatusController";

const putReviewStatusHandler = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await putReviewStatusController(Number(id));
        res.status(200).json({ message: "status review actualizado" });
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).send({ error: errorMessage })
    }
}

export default putReviewStatusHandler;