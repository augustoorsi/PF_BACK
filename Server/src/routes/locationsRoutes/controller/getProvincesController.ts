import sequelize from "../../../db";

const { Locations } = sequelize.models;

const getProvinces = async () => {
    try {
        const response = await Locations.findAll({
            attributes: ['nombre']
        })
        
        if(response) return response
        else throw new Error
    } catch (error) {
        return error
    }
}

export default getProvinces;