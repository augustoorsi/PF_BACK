import sequalize from '../../../db';
const { Properties, Rents } = sequalize.models


const getAllPropertiesDash = async () => {
    try {
      const properties = await Properties.findAll({
        include:[{
          model: Rents
        }]
      });
      return properties;
    } catch (error) {
      console.error(error);
      throw new Error("Error al obtener las propiedades");
    }
  }
  
  export default getAllPropertiesDash;