import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import User from './models/User';
import Rating from './models/Rating';
import Rent from './models/Rent';
import Property from './models/Property';
import Service from './models/Service';
import Location from './models/Locations';
import Favorite from './models/Favorites';

dotenv.config();
const { DB_DEPLOY} = process.env;

const sequelize: any = new Sequelize(`${DB_DEPLOY}?sslmode=require`,{
    logging: false,
    native: false})

// const sequelize: any = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/arbnb`,{
//     logging: false,
//     native: false})



User(sequelize)
Rating(sequelize)
Rent(sequelize);
Property(sequelize);
Service(sequelize);
Location(sequelize);
Favorite(sequelize);



const { Users, Ratings, Rents, Properties, Services, Favorites } = sequelize.models

Users.hasMany(Properties, { foreignKey: 'id_user' });
Properties.belongsTo(Users, { foreignKey: 'id_user' })

Services.belongsToMany(Properties, { through: 'Property_Services' });
Properties.belongsToMany(Services, { through: 'Property_Services' });

Users.hasMany(Rents, { foreignKey: 'id_user' });
Properties.hasMany(Rents, { foreignKey: 'id_property' });
Rents.belongsTo(Users, { foreignKey: 'id_user' });
Rents.belongsTo(Properties, { foreignKey: 'id_property' });

Users.hasMany(Favorites, { foreignKey: 'id_user' });
Properties.hasMany(Favorites, { foreignKey: 'id_property' });
Favorites.belongsTo(Users, { foreignKey: 'id_user' });
Favorites.belongsTo(Properties, { foreignKey: 'id_property' });

Users.hasMany(Ratings, { foreignKey: 'id_user' });
Properties.hasMany(Ratings, { foreignKey: 'id_property' });
Ratings.belongsTo(Users, { foreignKey: 'id_user' });
Ratings.belongsTo(Properties, { foreignKey: 'id_property' });

export default sequelize;

