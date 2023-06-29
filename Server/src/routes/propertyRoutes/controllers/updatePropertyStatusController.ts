import sequalize from '../../../db';

const { Properties } = sequalize.models;

const updatePropertyStatus = async (id: number) => {
  try {
    const updatedProperty = await Properties.update(
      { is_active: false },
      {
        where: {
          id_property: id,
        },
      }
    );
    return updatedProperty;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};

export default updatePropertyStatus;