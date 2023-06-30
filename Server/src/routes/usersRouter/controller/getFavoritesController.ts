import sequelize from '../../../db';

const {Users, Favorites, Properties } = sequelize.models;

const getFavoritesController = async (id_user:any) => {
    const user = await Users.findByPk(id_user, {
        include: {
            model: Favorites,
            include: Properties
        }
    });
    
    return user
};

export default getFavoritesController;
