import { DataTypes, Model, Sequelize } from "sequelize";
import { ServiceAttributes } from "./Interfaces";

interface ServiceInstance extends Model<ServiceAttributes>, ServiceAttributes {}

const Service = (sequelize: Sequelize) => {
    sequelize.define<ServiceInstance>('Services', {
        service_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        icon: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
    )
}

export default Service;