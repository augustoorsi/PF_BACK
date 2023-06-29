import { Request, Response } from "express";
import getAllUsersController from "../controller/getAllUsersController";

const getAllUsersHandler = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsersController();
        res.json(users)
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Error al obtener los usuarios"})        
    }
}

export default getAllUsersHandler;