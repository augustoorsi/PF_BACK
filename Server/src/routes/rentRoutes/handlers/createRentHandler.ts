import { Request, Response } from "express";
import createRentController from "../controllers/createRentController";

const createRentHandler = async (req: Request, res: Response) => {
    try {
        const rentData = req.body;
        const newRent = await createRentController(rentData)
        res.status(201).json(newRent);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }


export default createRentHandler;