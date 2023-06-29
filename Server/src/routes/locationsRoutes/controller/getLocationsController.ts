import sequelize from "../../../db";


const { Locations } = sequelize.models;

const getLocations = async (province: string, cityName?: string ) => {
    try {
        const response = await Locations.findAll({
            attributes: ['nombre', 'ciudades'],
            where: {
                nombre: province
            }
        })
        if(cityName){
            response.forEach((location: any) => {
              location.ciudades = location.ciudades.filter((ciudad: any) => ciudad.nombre.toLowerCase().startsWith(cityName.toLowerCase()));
            });
          }
        if(response) return response;
        else throw new Error;
    } catch (error) {
        return error;
    }
}

export default getLocations;