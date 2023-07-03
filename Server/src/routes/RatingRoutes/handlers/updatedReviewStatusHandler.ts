import { Request, Response } from "express";
import updateReviewStatusController from "../controllers/updatedReviewStatusController";

const updateReviewStatusHandler = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { report_reason } = req.body; // Obtener el valor de report_reason del cuerpo de la solicitud
  
    try {
      await updateReviewStatusController(Number(id), report_reason);
      res.status(200).json({ message: "status review actualizado" });
    } catch (error) {
      const errorMessage = (error as Error).message;
      res.status(400).send({ error: errorMessage });
    }
  };
export default updateReviewStatusHandler;