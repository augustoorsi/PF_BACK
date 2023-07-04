import { Request, Response } from "express";
import getRatingController from "../controllers/getRatingController"

const getRatingHandler = async (req: Request, res: Response)=>{
    const {id} = req.query
    try {
        const response = getRatingController(id)
        res.status(200).send(response)
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).send({ error: errorMessage })
    }

}

export default getRatingHandler