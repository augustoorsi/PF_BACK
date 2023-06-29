import sequelize from "../../../db";
import { PropertyAttributes } from "../../../models/Interfaces";

const { Properties, Users } = sequelize.models;

const updateFavorites = async (id_user:string, id_property:string)=>{

    const user: any = await Users.findByPk(id_user);
    const property:any =await Properties.findByPk(id_property)

    if (!user) {
        throw new Error('El usuario no existe');
        }
    if (!property) {
        throw new Error('La propiedad no existe');
        }
        await user.addProperty(property)
        await property.addUser(user)
}

export default updateFavorites