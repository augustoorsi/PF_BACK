import { Request, Response } from "express";
import getLocations from "../controller/getLocationsController";

const getLocationsByProvince = async(req: Request, res: Response) => {
    try {
        const city = req.query.city as unknown as string
        const { province }  = req.params;
        
        const locations = await getLocations(province, city);
        if(locations) res.status(200).json(locations);
        else throw new Error('Invalid ID');
    } catch (error) {
        const errorMessage = (error as Error).message;
        res.status(400).send({error: errorMessage});
    }
}

export default getLocationsByProvince;