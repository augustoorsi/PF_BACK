import sequelize from "../../../db";

const { Ratings } = sequelize.models;

const updateReviewStatusController = async (id:number) => {
    try {
        const updatedStatus = await Ratings.update(
            {
                is_active: true,
                is_reported: true,
                report_reason: ""
              },
            {
                where: {
                    rating_id: id,
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
export default updateReviewStatusController;