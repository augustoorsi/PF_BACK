import sequelize from "../../../db";
import { PropertyAttributes } from "../../../models/Interfaces";


const { Properties, Services, Users } = sequelize.models;

interface Property_Services extends PropertyAttributes {
    services?: string[];
}


const createPropController = async (newProperty: Partial<Property_Services>) => {
    const services: string[] | undefined = newProperty.services;

    const { id_user } = newProperty;

    const user: any = await Users.findByPk(id_user);

    if (!user) {
    throw new Error('El usuario no existe');
    }

    const property: any = await Properties.create(newProperty);
    await user.addProperty(property);
    
    if (services && services.length > 0) {
        const servicesFromDb = await Services.findAll({ where: { name: services } });
        await property.addServices(servicesFromDb);
    }

    return property;
};

export default createPropController;
