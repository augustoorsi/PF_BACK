import sequalize from '../../../db';
const { Properties, Services } = sequalize.models;
  
  const updateProperty = async (id: number, updatedValues: Partial<typeof Properties>) => {
  const { services } = updatedValues;

  try {
    await Properties.update(updatedValues, {
      where: {
        id_property: id,
      },
    });

    if (services && Array.isArray(services)) {
      const property = await Properties.findByPk(id);
      await property.setServices([]); // Eliminar todas las asociaciones de servicios existentes

      // Buscar los servicios en la base de datos y asociarlos a la propiedad actualizada
      const servicesDB = await Services.findAll({
        where: { name: services },
      });
      await property.addServices(servicesDB);
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};

export default updateProperty;
