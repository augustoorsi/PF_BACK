import  sequalize  from '../../../db'

const { Users, Properties, Rents, Ratings } = sequalize.models

const getUsersById = async (id: string) => {

    const user = await Users.findByPk(id);
    const properties = await user.getProperties();
    const response = await Users.findByPk(id, {
        include: [
          {
            model: Rents,
            include: {
              model: Properties,
              include: {
                model: Users,
                foreignKey: 'id_user'
              }
            }
          },
          {
            model: Ratings    
          }
        ]
      })
      const userObj = response.toJSON();
      userObj.properties = await Promise.all(properties.map(async (property: any) => {
        const propiedad = await Properties.findByPk(property.id_property);
        const rents = await Rents.findAll({
          where: {
            id_property: property.id_property
          }
        });
        const propiedadObj = propiedad.toJSON();
        propiedadObj.rents = rents.map((rent: any) => rent.toJSON());
        return propiedadObj;
      }));
      return userObj;
};

export default getUsersById;