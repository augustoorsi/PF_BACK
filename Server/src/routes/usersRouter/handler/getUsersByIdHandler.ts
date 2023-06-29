import { Request, Response } from "express";
import getUsersById from "../controller/getUsersByIdController";

const getUsersByIdHandler = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        if(id){
            const userById = await getUsersById(id)
            if(userById) res.status(200).send(userById)
            else throw new Error('There is no user with this id')
        }
    } catch (error) {
        const errorMessage = (error as Error).message
        res.status(400).send({error: errorMessage})
    }
}

export default getUsersByIdHandler;