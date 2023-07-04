import { DataTypes, Model, Sequelize } from 'sequelize';
import { UserAttributes } from './Interfaces';

interface UserInstance extends Model<UserAttributes>, UserAttributes { }

const User = (sequelize: Sequelize) => {
    sequelize.define<UserInstance>('Users', {
        id_user: {
            primaryKey: true,
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true
        },
        number: {
            type: DataTypes.STRING,
            allowNull: true
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        gender: {
            type: DataTypes.ENUM('Male', 'Female', 'Other'),
            allowNull: true
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        user_type: {
            type: DataTypes.ENUM('User', 'Owner', 'Admin'),
            allowNull: false
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    })
}


export default User

