
import { DataTypes, Model, Sequelize } from 'sequelize';
import { RentAttributes } from './Interfaces';
import { INTEGER } from 'sequelize';

interface UserInstance extends Model<RentAttributes>, RentAttributes { }

const Rent = (sequelize: Sequelize) => {
    sequelize.define<UserInstance>('Rents', {

        rent_id: {
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
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        guests_number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        payment_status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        payment_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        creation_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            defaultValue:false,
            allowNull: false
        }
    }
    )
}

export default Rent