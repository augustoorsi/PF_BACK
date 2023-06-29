import { DataTypes, Model, Sequelize } from "sequelize";
import { PropertyAttributes } from "./Interfaces";

interface PropertyInstance extends Model<PropertyAttributes>, PropertyAttributes {}

const Property = (sequelize: Sequelize) => {
    sequelize.define<PropertyInstance>('Properties', {
        id_property: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_user: {
            type: DataTypes.STRING,
            references: {
                model: 'Users',
                key: 'id_user'
            }
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        province: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip_code: {
            type: DataTypes.STRING,
            allowNull: false
        },
        property_type: {
            type: DataTypes.ENUM('House', 'Apartment', 'Room'),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        price_per_night: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        images: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },
        rating: {
            type: DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 0
        },
        ratings_amount: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        rooms_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        bathrooms_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        beds_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        max_guests: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        allow_pets: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        weekly_discount: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        monthly_discount: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        min_nights: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        accessibility:{
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue: false
        }
})}

export default Property;