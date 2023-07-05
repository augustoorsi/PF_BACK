import { Request, Response } from "express";
import getRatingController from "../controllers/getRatingController"

const getRatingByIdHandler = async (req: Request, res: Response)=>{
    const {id} = req.params
    const {active} = req.query 
    console.log(active);
    
    try {
        if(id){
            if(active){
                const response = await getRatingController(id, active)
                res.status(200).send(response)
            }
            else{
                const response = await getRatingController(id)
                res.status(200).send(response)
            }
        }
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).send({ error: errorMessage })
    }
}

export default getRatingByIdHandler