import { Request, Response } from "express";
import updateProperty from "../controllers/updatePropertyController";

const updatePropertyHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedValues = req.body; 
  try {
    await updateProperty(Number(id), updatedValues);
    res.status(200).json({ message: "Propiedad actualizada" });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(400).send({ error: errorMessage });
  }
};


export default updatePropertyHandler;
