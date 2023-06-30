
import { DataTypes, Model, Sequelize } from 'sequelize';
import { FavoritesAttributes } from './Interfaces';


interface UserInstance extends Model<FavoritesAttributes>, FavoritesAttributes { }

const Favorite = (sequelize: Sequelize) => {
    sequelize.define<UserInstance>('Favorites', {

        favorite_id: {
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false
        },
        id_user: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
            model: 'Users',
            key: 'id_user'
            }
        },
        id_property: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
            model: 'Properties',
            key: 'id_property'
            }
        }
    }
    )
}

export default Favorite