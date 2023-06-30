import sequelize from "../../../db";

const { Rents } = sequelize.models

const putReviewStatusController = async (id:number) => {
    try {
        const updatedStatus = await Rents.update(
            {review_status: true},
            {
                where: {
                    rent_id: id,
                }
            }
        )
        return updatedStatus;
    } catch (error) {
        if (typeof error === 'string') {
            throw new Error(error);
          } else {
            throw error;
          }        
    }
}

export default putReviewStatusController;