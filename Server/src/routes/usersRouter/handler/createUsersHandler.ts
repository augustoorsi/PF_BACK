import { Request, Response } from "express";
import { UserAttributes } from "../../../models/Interfaces";
import formBodyCheck from "../../../controllers/checkFormProps";
import createUsersController from "../controller/createUsersController";


const createUsersHandler = async (req: Request, res: Response) => {
    const usersPropertiesArray: string[] = ["user_type"]

    const result: string | boolean = formBodyCheck(usersPropertiesArray, req.body)

    const newUser = req.body as UserAttributes

    try {
        if (result === true) {
            const response = await createUsersController(newUser)
            return res.status(200).json(response)
        }
        else throw new Error(`${result}`)
    } catch (error) {
        const errorMessage = (error as Error).message
        return res.status(400).send({ error: errorMessage })
    }
}

export default createUsersHandler;