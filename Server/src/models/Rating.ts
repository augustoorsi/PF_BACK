
import { DataTypes, Model, Sequelize } from 'sequelize';
import { RatingAttributes } from './Interfaces';

interface UserInstance extends Model<RatingAttributes>, RatingAttributes { }

const Rating = (sequelize: Sequelize) => {
    sequelize.define<UserInstance>('Ratings', {

        rating_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
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
        description: {
            type: DataTypes.STRING(1000),
            allowNull: true
        },
        total_rating: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        cleaning_rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        communication_rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price_quality_rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        veracity_rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        date_rating: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        is_reported: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        report_reason: {
            type: DataTypes.STRING(200),
            allowNull: true,
        }
    },
    {
        timestamps: false
    }
    )
}

export default Rating  