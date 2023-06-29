import { Request, Response } from "express";
import getUsers from "../controller/getUsersController";
import getUsersByName from "../controller/getUsersByNameController";

const getUsersHandler = async(req: Request, res: Response) => {
    const name = req.query.name as string
    const users: any = getUsers()
    try {
        if(name){
            const usersByName = await getUsersByName(name)
            return res.status(200).send(usersByName)
        }
        console.log(users);
        if(users.length) res.status(200).send(users)
        else throw new Error('There is no users')
    } catch (error) {
        const errorMessage = (error as Error).message
        res.status(400).send({error: errorMessage})
    }
}

export default getUsersHandler;