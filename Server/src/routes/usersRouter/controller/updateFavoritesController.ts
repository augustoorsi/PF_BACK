import sequelize from "../../../db";

const { Properties, Users, Favorites } = sequelize.models;

const updateFavorites = async (id_user:string, id_property:string)=>{
    const favBody: any = { id_user, id_property }
    const user: any = await Users.findByPk(id_user);
    const property:any =await Properties.findByPk(id_property)

    if (!user) {
        throw new Error('El usuario no existe');
        }
    if (!property) {
        throw new Error('La propiedad no existe');
        }
        const favorite = await Favorites.create(favBody)
        await favorite.setUser(user)
        await favorite.setProperty(property)
}

export default updateFavorites