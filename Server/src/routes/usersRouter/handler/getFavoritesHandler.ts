import { Request, Response } from "express";
import getFavoritesController from "../controller/getFavoritesController";


const getFavoritesHandler =async (req: Request, res: Response)=>{
    const { id_user } = req.params
    const {id_property} = req.body
    try {
        const result = await getFavoritesController(id_user)
        res.status(200).json(result)
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).send({ error: errorMessage });
    }

}

export default getFavoritesHandler