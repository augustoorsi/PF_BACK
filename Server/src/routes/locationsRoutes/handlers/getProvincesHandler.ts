import { Request, Response } from "express";
import getProvinces from "../controller/getProvincesController";

const getProvincesHandler = async(req: Request, res: Response) => {
    try {
        const provinces = await getProvinces()
        if(provinces) res.status(200).json(provinces)
        else throw new Error('There is no provinces')
    } catch (error) {
        const errorMessage = (error as Error).message
        res.status(400).send({error: errorMessage})
    }
}

export default getProvincesHandler;