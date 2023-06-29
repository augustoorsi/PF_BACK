import { Request, Response } from "express";
import updatePropertyStatus from "../controllers/updatePropertyStatusController";

const updatePropertyStatusHandler = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await updatePropertyStatus(Number(id));
    res.status(200).json({ message: "Propiedad desactivada" });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(400).send({ error: errorMessage });
  }
};

export default updatePropertyStatusHandler;