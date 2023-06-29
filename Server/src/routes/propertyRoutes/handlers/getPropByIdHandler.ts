import { Request, Response } from "express";
import getPropById from "../controllers/getPropByIdController";


const getPropByIdHandler = async (req: Request, res: Response) => {
    const  { id } = req.params
    const numberId: number = Number(id)
    
    try {
        if(id){
            const propById = await getPropById(numberId)
            if(propById.length) res.status(200).json(propById)
            else throw new Error('There is no property with this id')
        }
    } catch (error) {
        const errorMessage = (error as Error).message
        res.status(400).send({error: errorMessage})
    }
};

export default getPropByIdHandler;