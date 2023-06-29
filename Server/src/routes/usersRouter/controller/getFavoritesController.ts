import sequelize from '../../../db';

const {Properties, Favorites } = sequelize.models;

const getFavoritesController = async (id_user:any) => {
    const properties = await Favorites.findAll({
        where: {userId : id_user }
    })
    
    const propertiesId = properties.map((favorite:any)=> favorite.dataValues.propertyId)
    console.log(propertiesId);
    

    const favoriteProperties = await Properties.findAll({
        where: {id_property: propertiesId}
    })


    return favoriteProperties
};

export default getFavoritesController;
