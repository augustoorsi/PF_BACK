import sequelize from "../../../db";
import { enviarConfirmacionReserva } from "../../../utils/NodeMailer";

const { Rents, Properties, Users } = sequelize.models

const createRentController = async (rentData: any) => {
      const rent = await Rents.create(rentData)
      const user = await Users.findByPk(rent.id_user);
      const property = await Properties.findByPk(rent.id_property);
      const owner = await Users.findByPk(property.id_user);

      const usuario = {
        nombre: `${user.name} ${user.surname}`,
        email: user.email
      }

      const propiedad = {
        propietario: `${owner.name} ${owner.surname}`,
        nombre: property.title,
        propietarioEmail: owner.email
      }
      
      if (user && property) {
        await rent.setUser(user);
        await rent.setProperty(property);
        enviarConfirmacionReserva(usuario, propiedad)
      }
      else throw new Error('User or Property not founded')

      return rent
}

export default createRentController;