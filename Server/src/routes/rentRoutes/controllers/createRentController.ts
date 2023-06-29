import sequelize from "../../../db";

const { Rents, Properties, Users } = sequelize.models

const createRentController = async (rentData: any) => {
      const rent = await Rents.create(rentData)
      const user = await Users.findByPk(rent.id_user);
      const property = await Properties.findByPk(rent.id_property);
      if (user && property) {
        await rent.setUser(user);
        await rent.setProperty(property);
      }
      else throw new Error('User or Property not founded')

      return rent
}

export default createRentController;