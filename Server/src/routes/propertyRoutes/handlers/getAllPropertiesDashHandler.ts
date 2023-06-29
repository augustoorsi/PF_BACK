import { Request, Response } from "express";
import getAllPropertiesDash from "../controllers/getAllPropertiesDash";

const getAllPropertiesDashHandler = async (req: Request, res: Response) => {
  try {
    const properties = await getAllPropertiesDash();
    res.json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener las propiedades" });
  }
}

export default getAllPropertiesDashHandler;