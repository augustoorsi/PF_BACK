import { Request, Response } from "express";
import deleteFavoriteController from "../controller/deleteFavoritesController";

const deleteFavoriteHandler = async (req: Request, res: Response)=>{
    const {id_property,id_user} = req.params
    try {
        await deleteFavoriteController(id_property,id_user)
        res.status(200).send("Favorito eliminado con exito")
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).send({ error: errorMessage });
    }

}

export default deleteFavoriteHandler