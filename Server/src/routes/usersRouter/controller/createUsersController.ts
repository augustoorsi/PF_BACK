import sequelize from "../../../db";
import { UserAttributes } from "../../../models/Interfaces";

const { Users } = sequelize.models


const createUsersController = async (newUser: Partial<UserAttributes>) => {
    const createdUser: any = await Users.create(newUser);
    return createdUser
}

export default createUsersController;