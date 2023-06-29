import sequalize from "../../../db";
const { Users } = sequalize.models

const getAllUsersController = async () => {
    try {
        const users = await Users.findAll();
        return users;
    } catch (error) {
        console.log(error);
        throw new Error("Error al obtener todos los Usuarios");                
    }

}
export default getAllUsersController;