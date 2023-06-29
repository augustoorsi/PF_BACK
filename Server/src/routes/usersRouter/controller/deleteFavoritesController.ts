import sequelize from '../../../db';

const { Favorites } = sequelize.models;


const deleteFavoriteController = async(id_property:any,id_user:any)=>{
    Favorites.destroy({
        where: {
            propertyId:id_property,
            userId: id_user}
    })

}

export default deleteFavoriteController