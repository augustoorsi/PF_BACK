import { Request, Response, Express } from "express";
import createPropController from "../controllers/createPropController";
import { PropertyAttributes } from "../../../models/Interfaces";
import formBodyCheck from "../../../controllers/checkFormProps";
import fs from 'fs';
import { imageUpdate } from "../../../utils/cloudinary";


const createPropHandler = async(req: Request, res: Response) => {
    const propertiesArray: string[] = [
        "id_user",
        "title",
        "province",
        "location",
        "address",
        "zip_code",
        "property_type",
        "description",
        "price_per_night",
        // "images",
        "start_date",
        "end_date",
        "is_active",
        "rooms_number",
        "bathrooms_number",
        "beds_number",
        "max_guests",
        "allow_pets",
        "weekly_discount",
        "monthly_discount",
        "min_nights",
    ]
    const result: string|boolean = formBodyCheck(propertiesArray, req.body)
    const newProperty = req.body as PropertyAttributes
    const multerArray = req.files as Express.Multer.File[];
    let pathsArray: string[] = [];
    if (multerArray) {
        pathsArray = await Promise.all(multerArray.map(async (obj: Express.Multer.File) => {
            const uploadResult = await imageUpdate(obj.path);
            fs.unlink(obj.path, (err) => {
                if (err) {
                    console.error('Error deleting local file:', err);
                }
            });
            return uploadResult.url;
        }));
    }
    newProperty.images = pathsArray
    
    try {
        if(result === true){
            const response = await createPropController(newProperty)
            return res.status(200).json(response)
        }
        else throw new Error(`${result}`)
    } catch (error) {
        const errorMessage = (error as Error).message
        console.log(errorMessage);
        return res.status(400).send({error: errorMessage})
    }
};

export default createPropHandler;
