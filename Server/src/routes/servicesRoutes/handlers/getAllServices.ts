import { Request, Response } from "express";
import getAllServicesController from "../controllers/getAllServicesController";

const getAllServices = async (req: Request, res: Response) => {
    try {
        const services = await getAllServicesController();
        return res.status(200).json(services);
    } catch (error: any) {
        return res.status(400).json({Error: error.message});
    } 
}

export default getAllServices;