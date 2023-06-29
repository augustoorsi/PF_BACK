import { Request, Response } from "express";
import filterPropertiesController from "../controllers/filterPropertiesController";


const getAllPropHandler = async (req: Request, res: Response) => {
    const querys:object = req.query
    const page = req.query.page
    console.log(querys);
    

    try {
        if (Object.keys(querys).length > 0) {
            const response = await filterPropertiesController(querys, Number(page))
            return res.status(200).json(response)
        }
        else throw new Error('No hay querys')
    } catch (error: any) {
        return res.status(400).json({Error: error.message})
    }
};

export default getAllPropHandler;