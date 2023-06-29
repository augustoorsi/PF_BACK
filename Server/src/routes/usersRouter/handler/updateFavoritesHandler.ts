import { Request, Response } from "express";
import updateFavorites from "../controller/updateFavoritesController";

const updateFavoritesHandler = async(req: Request, res: Response) => {
    const { id_user, id_property } = req.params
    
    try {
        const result = await updateFavorites(id_user, id_property)
        res.status(200).json(result)
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).send({ error: errorMessage });
    }
}

export default updateFavoritesHandler