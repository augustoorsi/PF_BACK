import sequelize from "../../../db";

const { Services } = sequelize.models;

const getAllServicesController = async () => {
    try {
        const response = await Services.findAll()
        if(response) return response
        else throw new Error
    } catch (error) {
        return error
    }
}

export default getAllServicesController;