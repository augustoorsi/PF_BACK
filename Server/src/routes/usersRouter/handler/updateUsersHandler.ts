import { Request, Response } from "express";
import updateUser from "../controller/updateUsersController";

const updateUsersHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedValues = req.body;

  try {
    const updatedUser = await updateUser(id, updatedValues);
    res.status(200).json({ message: "Usuario actualizado", user: updatedUser });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(400).send({ error: errorMessage });
  }
};

export default updateUsersHandler;