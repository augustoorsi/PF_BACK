import { DataTypes, Model, Sequelize } from "sequelize";
import { LocationAttributes } from "./Interfaces";

interface LocationInstance extends Model<LocationAttributes>, LocationAttributes {}

const Location = (sequelize: Sequelize) => {
    sequelize.define<LocationInstance>('Locations', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ciudades: {
            type: DataTypes.ARRAY(DataTypes.JSONB),
            allowNull: false
        }
    })
}

export default Location

