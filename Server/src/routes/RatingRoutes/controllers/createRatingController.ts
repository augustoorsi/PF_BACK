import sequelize from "../../../db";

const { Ratings, Properties, Users } = sequelize.models

const createRatingController = async (ratingData: any) => {
    const rating = await Ratings.create(ratingData);
    const user = await Users.findByPk(rating.id_user);
    const property = await Properties.findByPk(rating.id_property);
    if(user && property) {
        await rating.setUser(user);
        await rating.setProperty(property);

        const ratings = await Ratings.findAll({
            where: {
                id_property: rating.id_property
            }
        });

        const totalRating = ratings.reduce((acc: any, curr: any) => acc + curr.total_rating, 0);
        const averageRating = totalRating / ratings.length;

        await property.update({
            ratings_amount: ratings.length,
            rating: averageRating
        });
    }
    else throw new Error('User or Property not founded')

    return rating
}

export default createRatingController;