import sequelize from '../../../db';

const { Favorites } = sequelize.models;


const deleteFavoriteController = async(id_property:any,id_user:any)=>{
    Favorites.destroy({
        where: {
            id_property: id_property,
            id_user: id_user}
    })

}

export default deleteFavoriteController